const mongoose = require("mongoose");

const sensorDataSchema = new mongoose.Schema({
  nodeId: {
    type: String,
    required: true,
  },
  parameters: Object,
});

const SensorData = mongoose.model("SensorData", sensorDataSchema);

module.exports = SensorData;
