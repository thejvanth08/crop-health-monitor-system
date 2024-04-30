import {crops} from "../constants/constants";
import Crop from "../components/Crop";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../App";

// to extract only the names
const allCrops = crops.map(crop => crop.name);

const SelectCrops = () => {

  const navigate = useNavigate();
  
  // getting from global context - user selected crops
  const {overviewCrops, setOverviewCrops} = useContext(AppContext);

  return (
    <div className="w-full h-screen pt-4 rounded-xl">
      <h1 className="text-3xl font-bold text-center">Select Your Crops</h1>
      <div className="bg-tertiary mx-auto w-[500px] lg:w-[700px] h-[580px] mt-4 mb-3 px-2 py-4 rounded-2xl shadow-lg">
        <input
          type="text"
          placeholder="Search your crop..."
          className="bg-primary text-white outline-none w-80 block mx-auto px-3 py-2 rounded-xl placeholder:text-slate-300"
        />
        <div className="mt-8 px-10">
          {
            allCrops.map((crop) => <Crop crop={crop} overviewCrops={overviewCrops} setOverviewCrops={setOverviewCrops}>
            </Crop>)
          }
        </div>
      </div>
      <button onClick={() => {
        console.log(overviewCrops);
        navigate("/select-nodes");
      }} className="block mx-auto px-3 py-2 bg-primary text-secondary text-lg font-semibold rounded-md">
        Selected
      </button>
    </div>
  );
}
export default SelectCrops;