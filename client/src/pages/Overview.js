import WeatherCard from "../components/WeatherCard";
import { crops } from "../constants/contants";

const Overview = () => {



  // const [crops, setCrops] = useState(crops);



  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center">Overview</h1>
      <div className="flex">
        <div className="w-full bg-orange-300 h-[1000px]">
          <div className="">

          </div>
          <div>

          </div>
          <div>ideal soil parameters</div>
        </div>
        <div className="hidden lg:block w-1/3 max-w-600 h-[1000px]">
          <h2>Weather Report</h2>
          <WeatherCard></WeatherCard>
        </div>
      </div>
    </div>
  );
}
export default Overview; 