import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const SensorChart = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    // Simulated function to fetch sensor data (replace with actual API call)
    const fetchSensorData = () => {
      // Generate random nitrogen values for demonstration 
      const randomNitrogenValue = (Math.random() * 100).toFixed(2);

      const now = new Date();
      // Format time as hh.mm.ss
      const hours = now.getUTCHours().toString().padStart(2, "0");
      const minutes = now.getUTCMinutes().toString().padStart(2, "0");
      const seconds = now.getUTCSeconds().toString().padStart(2, "0");
      const timestamp = `${hours}.${minutes}.${seconds}`;

      // Add new data point to the sensor data array
      setSensorData((prevData) => [
        ...prevData,
        { timestamp, nitrogen: randomNitrogenValue },
      ]);
    };

    // Fetch sensor data every 5 seconds
    const intervalId = setInterval(fetchSensorData, 2000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <LineChart
      className="mx-auto"
      width={800}
      height={400}
      data={sensorData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="nitrogen"
        stroke="#1D4C43"
        strokeWidth={2}
      />
    </LineChart>
  );
};

export default SensorChart;
