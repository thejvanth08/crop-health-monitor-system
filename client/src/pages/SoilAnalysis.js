import SensorChart from "../components/SensorChart";
import SensorMeter from "../components/SensorMeter";
import NodeName from "../components/NodeName";
import {useContext, useState} from "react";
import { sensors } from "../constants/contants";
import { AppContext } from "../App";
import { FaPlus } from "react-icons/fa";

const SoilAnalysis = () => {
  const {nodes} = useContext(AppContext);
  const [currentNode, setCurrentNode] = useState("");

  return (
    <div className="msin-h-full pb-10">
      <h1 className="text-3xl font-bold text-center">Overview</h1>
      <div>
        <h2 className="text-primary text-xl font-semibold text-center mt-12 mb-3.5">
          Field Selection
        </h2>
        <div className="flex">
          {nodes.map((node) => (
            <NodeName
              name={node}
              currentNode={currentNode}
              setCurrentNode={setCurrentNode}
            ></NodeName>
          ))}
          <button
            className="inline-block text-xl font-bold w-60 py-2 rounded-lg 
                bg-secondary text-primary flex justify-centerww"
            onClick={() => {}}
          >
            <FaPlus></FaPlus>
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-primary text-xl font-semibold text-center mt-12 mb-3.5">
          Time Series Sensor Data
        </h2>
        <SensorChart></SensorChart>
      </div>

      <div className="w-full mx-auto">
        <h2 className="text-primary text-xl font-semibold text-center mt-12 mb-3.5">
          Latest Sensor Data
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          {sensors.map((sensor) => (
            <SensorMeter {...sensor}></SensorMeter>
          ))}
        </div>
      </div>

      <div className="max-w-[800px] mx-auto">
        <h2 className="text-primary text-xl font-semibold text-center mt-12 mb-3.5">
          Conclusion
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          tincidunt, urna nec tincidunt dignissim, risus mauris malesuada ex,
          sollicitudin lobortis ipsum libero sit amet nisl. Integer ac nibh
          vestibulum nulla viverra vestibulum pulvinar vitae tortor. Cras non
          pretium lacus, non dapibus purus. Cras iaculis neque vel lacinia
          lacinia. Vestibulum nec lacinia eros. Aenean et suscipit velit, in
          blandit dolor. Nunc vitae nibh dui. Curabitur consequat velit dui, non
          congue arcu porttitor vitae. Duis at varius metus. Fusce faucibus,
          eros vitae accumsan luctus, ex risus eleifend dolor, sit amet porta
          sem ex sit amet odio. Morbi eget vehicula nunc. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Fusce pharetra in neque sed vulputate.
        </p>
      </div>
    </div>
  );
}
export default SoilAnalysis;