import React, { useState } from "react";
import axios from "axios";
import AnalysisDetails from "../components/AnalysisDetails";

const DiseaseAnalysis = () => {
  const [status, setStatus] = useState("not uploaded");
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [detections, setDetections] = useState([]);
  const [uniqueDiseases, setUniqueDiseases] = useState([]);
  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("processing");

    if (!selectedFiles) {
      alert("Please select one or more files.");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:4000/predict-diseases",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      let detections = response.data;

      // extract diseases only
      let diseases = detections.map((detection) => detection.disease);
      diseases = new Set(diseases);
      // convert set to array
      diseases = [...diseases];
      // remove healthy crop
      diseases = diseases.filter((disease) => !(disease.includes("healthy")));
      setUniqueDiseases(diseases);
      console.log(diseases);

      setStatus("processed");

      detections = detections.map((detection) => {
        // crop image
        const fileContent = detection.cropImage;
        const byteCharacters = atob(fileContent);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: "image/jpeg" }); // Adjust the MIME type as necessary
        const url = URL.createObjectURL(blob);

        // crop coordinates
        const lat = detection.coordinates.lat;
        const lon = detection.coordinates.lon;
        return {
          ...detection,
          imageUrl: url,
          coordinates: [lat, lon]
        };
      });

      setDetections(detections);
      // Optionally, reset the selected files state after successful upload
      setSelectedFiles(null);
    } catch (error) {
      console.error("Error uploading files:", error.message);
      // Handle error as needed
    }
  };

  return (
    <div className="pb-20">
      <h1 className="text-3xl font-bold text-center">Disease Analysis</h1>
      <h2 className="text-primary text-xl font-semibold text-center mt-12 mb-3.5">
        Identify your crop diseases & Get suggestions
      </h2>
      <div className="bg-tertiary max-w-[400px] md:max-w-[600px] mx-auto px-4 py-6 rounded-2xl shadow-xl">
        <p className="text-lg font-semibold text-center mb-3">
          Upload your crop images here
        </p>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="file"
            name="files"
            id="cropImages"
            className="text-sm text-gray-600 font-semibold block mx-auto
              file:mr-5 file:py-2 file:px-3
              file:font-semibold file:border-[0.1px] file:shadow-lg
              file:bg-secondary file:text-black
              hover:file:cursor-pointer file:rounded-lg"
            multiple
            onChange={handleFileChange}
          />{" "}
          <br></br>
          <button
            type="submit"
            className="block bg-primary text-secondary px-3 py-1.5 mx-auto rounded-lg lg:text-lg lg:px-5 lg:py-2"
          >
            Upload
          </button>
        </form>
      </div>

      <AnalysisDetails status={status} detections={detections} uniqueDiseases={uniqueDiseases} ></AnalysisDetails>
      
    </div>
  );
};

export default DiseaseAnalysis;
