const SensorName = ({name, currentSensor, setCurrentSensor}) => {
  const handleSelect = () => {
    setCurrentSensor(name);
  }

  return (
    <btn
      onClick={handleSelect}
      className={`inline-block font-bold px-3 py-2 mx-2 my-1 rounded-lg cursor-pointer ${
        currentSensor === name ? "bg-primary text-secondary" : "bg-tertiary text-primary "
      }`}
    >
      {name}
    </btn>
  );
}
export default SensorName;