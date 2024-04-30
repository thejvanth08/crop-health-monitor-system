import GaugeComponent from "react-gauge-component";

const SensorMeter = ({ name, value }) => {
  return (
    <div className="bg-tertiary py-4 max-auto m-3 md:m-5 rounded-lg hover:shadow-2xl transition-all duration-300">
      <p className="text-primary text-lg font-semibold text-center">{name}</p>
      <GaugeComponent style={{ width: "300px", marginBottom: "10px" }}></GaugeComponent>
      <button className="block mx-auto px-3 py-2 bg-primary text-secondary font-semibold rounded-md">
        Remedies
      </button>
    </div>
  );
};
export default SensorMeter;
