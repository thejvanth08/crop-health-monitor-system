const SensorData = require("../models/SensorData");

const storeSensorData = async (req, res) => {
  const { nodeId, parameters } = req.body;
  console.log(nodeId, parameters);
};

module.exports = {
  storeSensorData,
};
