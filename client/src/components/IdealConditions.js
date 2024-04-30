import { crops } from "../constants/contants";

const IdealConditions = ({name: cropName}) => {
  // selecting currentCrop object from crops array 
  // when no crops have been selected for overview -> we can't destructure it
  // so check whether the currentCrop obj exists or not
  const currentCrop = crops.find((crop) => crop.name === cropName);
  if(currentCrop) {
    // const is block scoped
    const { name, climate, temp, soilType, location, growingSeason, soilConditions: {nitrogen, phosphorus, potassium, humidity, soilTemp, ec, ph} } = currentCrop;
    return (
      <>

      <div className="bg-tertiary p-5 mt-8 rounded-lg shadow-lg drop-shadow-lg">
        <h2 className="text-primary text-xl font-semibold text-center mb-3.5">
          Ideal Conditions of {cropName}
        </h2>
        <div className="font-semibold text-[16.8px] lg:text-[18px] capitalize">
          <p>
            <span className="">Crop:</span>{" "}
            <span className="text-primary">
              {name}
            </span>
          </p>
          <p className="mt-1">
            <span className="">Climate:</span>{" "}
            <span className="text-primary">
              {climate}
            </span>
          </p>
          <p className="mt-1">
            <span className="">Temperature:</span>{" "}
            <span className="text-primary">
              {temp}
            </span>
          </p>
          <p className="mt-1">
            <span className="">Soil Type:</span>{" "}
            <span className="text-primary">
              {soilType}
            </span>
          </p>
          <p className="mt-1">
            <span className="">Location:</span>{" "}
            <span className="text-primary">
              {location}
            </span>
          </p>
          <p className="mt-1">
            <span className="">Growing Season:</span>{" "}
            <span className="text-primary">
              {growingSeason}
            </span>
          </p>
        </div>
      </div>

      <div className="bg-tertiary p-5 mt-8 rounded-lg shadow-lg drop-shadow-lg">
        <h2 className="text-primary text-xl font-semibold text-center mb-3.5">
          Ideal Soil Parameters of {cropName}
        </h2>
        <div className="font-semibold text-[16.8px] lg:text-[18px] capitalize">
          <p>
            <span className="">Nitrogen:</span>{" "}
            <span className="text-primary">
              {nitrogen}
            </span>
          </p>
          <p>
            <span className="">Phosphorous:</span>{" "}
            <span className="text-primary">
              {phosphorus}
            </span>
          </p>
          <p>
            <span className="">Potassium:</span>{" "}
            <span className="text-primary">
              {potassium}
            </span>
          </p>
          <p>
            <span className="">Humidity:</span>{" "}
            <span className="text-primary">
              {humidity}
            </span>
          </p>
          <p>
            <span className="">Soil Temperature:</span>{" "}
            <span className="text-primary">
              {soilTemp}
            </span>
          </p>
          <p>
            <span className="">Electrical Conductivity:</span>{" "}
            <span className="text-primary">
              {ec}
            </span>
          </p>
          <p>
            <span className="">Soil pH:</span>{" "}
            <span className="text-primary">
              {ph}
            </span>
          </p>
        </div>
      </div>
      </>
    );
  } else {
    return (
      <p>You have selected no crop.</p>
    )
  }
}
export default IdealConditions;