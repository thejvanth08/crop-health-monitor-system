const NodeName = ({name, currentNode, setCurrentNode}) => {
  const handleSelect = () => {
    setCurrentNode(name);
  }
  
  return (
    <button
      className={`inline-block text-xl font-bold w-60 py-2 text-center rounded-lg ${
        currentNode == name
          ? "bg-primary text-secondary"
          : "bg-secondary text-primary"
      } `}
      onClick={handleSelect}
    >
      {name}
    </button>
  );
}
export default NodeName;