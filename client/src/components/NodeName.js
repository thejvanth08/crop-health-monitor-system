const NodeName = ({ field, currentField, setCurrentField }) => {
  const handleSelect = () => {
    setCurrentField({ nodeId: field.id, name: field.cropName });
  };

  console.log(field);
  return (
    <button
      className={`inline-block text-xl font-bold w-60 py-2 text-center rounded-lg ${
        currentField.cropName == field.cropName
          ? "bg-primary text-secondary"
          : "bg-secondary text-primary"
      } `}
      onClick={handleSelect}
    >
      {field.cropName} - {field.nodeId}
    </button>
  );
};
export default NodeName;
