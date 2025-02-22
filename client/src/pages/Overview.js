import WeatherCard from "../components/WeatherCard";
import { weatherData } from "../constants/constants";
import { useState } from "react";
import { useAppContext } from "../UserContext";
import CropName from "../components/CropName";
import IdealConditions from "../components/IdealConditions";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAllOverviewCrops } from "../app/features/overview-crops/overviewCropsSlice";
import { selectUserData } from "../app/features/user-data/userDataSlice";

const Overview = () => {
  const userData = useSelector(selectUserData);
  // console.log(userData);
  const navigate = useNavigate();
  const overviewCrops = useSelector(selectAllOverviewCrops);
  // const { overviewCrops } = useAppContext();
  // default selected crop -> 1st crop from selected list if found
  const defaultCrop = overviewCrops[0] || null;
  const [selectedCrop, setSelectedCrop] = useState(defaultCrop);

  return (
    <div className="h-full pb-10">
      <h1 className="text-3xl font-bold text-center">Overview</h1>
      <div className="flex mt-8">
        <div className="w-full max-w-[800px] mx-auto">
          <div className="remove-scroll w-full flex overflow-x-scroll overflow-y-hidden">
            {overviewCrops.map((overviewCrop) => (
              <CropName
                key={overviewCrop}
                name={overviewCrop}
                selectedCrop={selectedCrop}
                setSelectedCrop={setSelectedCrop}
              />
            ))}
            <button
              onClick={() => {
                navigate("/select-crops");
              }}
              className="shrink-0 bg-tertiary text-primary text-xl font-bold w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 p-4 lg:p-7 mr-3 rounded-xl flex justify-center items-center"
            >
              <FaPlus></FaPlus>
            </button>
          </div>

          <IdealConditions name={selectedCrop}></IdealConditions>
        </div>
        <div className="hidden lg:block w-96">
          {weatherData.map((weatherDatum, index) => (
            <WeatherCard key={index} {...weatherDatum}></WeatherCard>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Overview;
