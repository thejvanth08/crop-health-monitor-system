const express = require("express");
const jwt = require("jsonwebtoken");
require("express-async-errors");
require("dotenv").config();
const connectDB = require("./db/connect");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
}); 

app.post("/signup", (req, res) => {
  
});



async function start() {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("connected to DB");
    app.listen(port, () => {
      console.log("server is listening at port", port);
    })
  } catch(err) {
    console.log(err);
  }
}

start();

