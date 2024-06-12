import GaugeComponent from "react-gauge-component";

const SensorMeter = ({ name, value }) => {

  // gauge config
  const gaugeConfig = {
    arc: {
      nbSubArcs: 100,
      colorArray: ["#5BE12C", "#F5CD19", "#EA4228"],
      width: 0.3,
      padding: 0.003,
    },
    labels: {
      valueLabel: {
        style: {
          fill: "#1D4C43",
          fontSize: 40
        },
      },
      tickLabels: {
        type: "outer",
        ticks: [
          { value: 40 }, // Lower bound of the first subArc
          { value: 80 }, // Midpoint of the range
          { value: 120 }, // Upper bound of the last subArc
        ],
      },
    },
    value: value,
    minValue: 0,
    maxValue: 120,
  };



  return (
    <div className="bg-tertiary py-4 max-auto m-3 md:m-5 rounded-lg hover:shadow-2xl transition-all duration-300">
      <p className="text-primary text-lg font-semibold text-center">{name}</p>
      <GaugeComponent
        style={{ width: "300px", marginBottom: "10px" }}
        {...gaugeConfig}
      ></GaugeComponent>
      <style jsx>{`
        .gauge-container .gauge-value {
          fill: black; // Set the color of the main value text
        }
      `}</style>

      <button className="block mx-auto px-3 py-2 bg-primary text-secondary font-semibold rounded-md">
        Remedies
      </button>
    </div>
  );
};
export default SensorMeter;
