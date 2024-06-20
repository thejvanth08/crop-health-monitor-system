const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const ExifImage = require("exif").ExifImage;
require("express-async-errors");
require("dotenv").config();
const connectDB = require("./db/connect");

const multer = require("multer");
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const path = require("path");

// routers
const authRouter = require("./routes/auth");

const port = process.env.PORT || 3000;
const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(cors());
// Serve static files (optional, if needed)
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/auth", authRouter);

app.post("/predict-diseases", upload.array("files"), async (req, res) => {
  console.log("predicting-diseases");
  try {
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    // Prepare data to send to FastAPI
    const formData = new FormData();
    files.forEach((file) => {
      const filePath = path.join(__dirname, "uploads", file.originalname);
      formData.append("files", fs.createReadStream(filePath), {
        filename: file.originalname,
        contentType: file.mimetype,
      });
    });

    // Make a POST request to FastAPI
    const fastapiEndpoint = "http://127.0.0.1:8000/detect/";
    const response = await axios.post(fastapiEndpoint, formData, {
      headers: formData.getHeaders(),
    });

    let detections = response.data.detections;

    // Use async/await to get GPS coordinates
    detections = await Promise.all(
      detections.map(async (detection) => {
        const filePath = path.join(__dirname, "uploads", detection.filename);
        const coordinates = await getGpsCoordinates(filePath);

        const cropImage = fs.readFileSync(filePath, {
          encoding: "base64"
        });
        return {
          ...detection,
          coordinates,
          cropImage
        };
      })
    );

    // Cleanup temp files (optional)
    files.forEach((file) => {
      const filePath = path.join(__dirname, "uploads", file.originalname);
      fs.unlinkSync(filePath);
    });

    res.json(detections);
  } catch (error) {
    console.error("Error uploading files:", error.message);
    res
      .status(error.response?.status || 500)
      .json({ error: "Failed to upload files" });
  }
});

async function start() {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("connected to DB");
    app.listen(port, () => {
      console.log("server is listening at port", port);
    });
  } catch (err) {
    console.log(err);
  }
}

start();

function getGpsCoordinates(file) {
  return new Promise((resolve, reject) => {
    try {
      new ExifImage({ image: file }, function (error, exifData) {
        if (error) {
          reject("Error: " + error.message);
        } else {
          const gpsData = exifData.gps;
          if (gpsData && gpsData.GPSLatitude && gpsData.GPSLongitude) {
            let latitude =
              gpsData.GPSLatitude[0] +
              gpsData.GPSLatitude[1] / 60 +
              gpsData.GPSLatitude[2] / 3600;
            let longitude =
              gpsData.GPSLongitude[0] +
              gpsData.GPSLongitude[1] / 60 +
              gpsData.GPSLongitude[2] / 3600;

            // Check if coordinates are in the southern or western hemisphere
            if (gpsData.GPSLatitudeRef === "S") {
              latitude = -latitude;
            }
            if (gpsData.GPSLongitudeRef === "W") {
              longitude = -longitude;
            }

            resolve({
              lat: latitude,
              lon: longitude,
            });
          } else {
            console.log("No GPS data found");
            resolve(null);
          }
        }
      });
    } catch (error) {
      reject("Error: " + error.message);
    }
  });
}
