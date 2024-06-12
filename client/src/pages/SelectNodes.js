import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

const SelectNodes = () => {
  const { nodes, setNodes } = useContext(AppContext);
  const inputRef = useRef(null);

  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    const nodeVal = inputRef.current.value;
    setNodes([...nodes, nodeVal])
    inputRef.current.value = "";
  }

  return (
    <div className="w-full h-screen pt-4 rounded-xl px-5">
      <h1 className="text-3xl font-bold text-center">
        Select Your Sensor Nodes
      </h1>
      <div className="bg-tertiary mx-auto max-w-[400px] lg:max-w-[600px] min-h-[480px] mt-4 mb-3 px-2 py-6 rounded-2xl shadow-lg">
        <form action="">
          <div className="w-10/12 flex mx-auto">
            <input
              className="bg-primary text-white w-9/12 outline-none block mx-auto px-3 py-2 rounded-xl placeholder:text-slate-300"
              type="text"
              placeholder="Enter your Node ID"
              ref={inputRef}
            />
            <button
              onClick={handleAdd}
              className="bg-secondary border-2 border-primary  rounded-r-xl relative right-3 inline-block w-3/12"
            >
              Add
            </button>
          </div>
          <div className="mt-6 w-full">
            {nodes.map((node, index) => (
              <div className="text-primary font-bold w-10/12 max-w-80 px-6 py-2 mx-auto mb-2 border-2 border-primary rounded-xl">
                <span className="text-md">{index + 1}.</span> <span className="text-xl pl-2">{node}</span>
              </div>
            ))}
          </div>
        </form>
      </div>
      <button
        onClick={() => {
          navigate("/overview");
        }}
        className="block mx-auto px-3 py-2 bg-primary text-tertiary text-lg font-semibold rounded-md"
      >
        Added
      </button>
    </div>
  );
}
export default SelectNodes;