import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const SensorChart = ({ currentSensor }) => {
  const [sensorData, setSensorData] = useState([]);

  // for resizing the chart based on the vw
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Simulated function to fetch sensor data (replace with actual API call)
    const fetchSensorData = () => {
      // Generate random values for demonstration 
      const randomVal = (Math.random() * 100).toFixed(2);

      const now = new Date();
      // Format time as hh.mm.ss
      const hours = now.getUTCHours().toString().padStart(2, "0");
      const minutes = now.getUTCMinutes().toString().padStart(2, "0");
      const seconds = now.getUTCSeconds().toString().padStart(2, "0");
      const timestamp = `${hours}.${minutes}.${seconds}`;

      // Add new data point to the sensor data array
      setSensorData((prevData) => [
        ...prevData,
        { timestamp: timestamp, nitrogen: randomVal },
      ]);
    };
    // Fetch sensor data every 5 seconds
    const intervalId = setInterval(fetchSensorData, 2000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-secondary max-w-[700px] lg-w-[1000px] h-[300px] md:h-[400px] lg:h-[480px] mx-auto py-3 pr-3 md:py-8 md:pr-6 rounded-lg">
      <ResponsiveContainer
        className=""
        width="100%"
        height="100%"
      >
        <LineChart data={sensorData}>
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
      </ResponsiveContainer>
    </div>
  );
};

export default SensorChart;
