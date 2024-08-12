import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add, selectAllFields } from "../app/features/fields/fieldsSlice";

const SelectNodes = () => {
  const fields = useSelector(selectAllFields);
  const dispatch = useDispatch();

  const nodeIdRef = useRef(null);
  const cropNameRef = useRef(null);

  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    const fieldNodeId = nodeIdRef.current.value;
    const fieldCropName = cropNameRef.current.value;
    dispatch(
      add({
        nodeId: fieldNodeId,
        cropName: fieldCropName,
      }),
    );
    nodeIdRef.current.value = "";
    cropNameRef.current.value = "";
  };

  return (
    <div className="w-full h-screen pt-4 rounded-xl px-5">
      <h1 className="text-3xl font-bold text-center">
        Select Your Sensor Nodes
      </h1>
      <div className="bg-tertiary mx-auto max-w-[400px] lg:max-w-[600px] min-h-[480px] mt-4 mb-3 px-2 py-6 rounded-2xl shadow-lg">
        <form action="">
          <div className="mx-auto">
            <input
              className="bg-primary text-white w-[90%] outline-none block mx-auto px-3 py-2 rounded-xl placeholder:text-slate-300 lg:w-[70%]"
              type="text"
              placeholder="Enter your Field Node ID"
              ref={nodeIdRef}
            />
            <input
              className="bg-primary text-white w-[90%] outline-none block mx-auto mt-1 px-3 py-2 rounded-xl placeholder:text-slate-300 lg:w-[70%]"
              type="text"
              placeholder="Enter your Field Crop Name"
              list="crops"
              ref={cropNameRef}
            />
            <datalist id="crops">
              <option>hi</option>
              <option>hi</option>
            </datalist>
            <button
              onClick={handleAdd}
              className="bg-secondary border-2 border-primary font-semibold block mx-auto mt-3 px-8 py-2 rounded-lg"
            >
              Add
            </button>
          </div>
          <div className="mt-6 w-full">
            {fields.map((field, index) => (
              <div
                key={field.nodeId}
                className="text-primary font-bold w-[90%] px-6 py-2 mx-auto mb-2 border-2 border-primary rounded-xl lg:w-[70%]"
              >
                <span className="text-md">{index + 1}.</span>{" "}
                <span className="text-xl pl-2">
                  {field.nodeId} - {field.cropName}
                </span>
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
};
export default SelectNodes;
