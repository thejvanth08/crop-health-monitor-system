import { useState } from "react";

const DiseaseRemedy = ({ crop, name, type, image, causes, remedies }) => {

  const [popup, setPopup] = useState(false); 



  return (
    // <div className={`${popup ? "bg-gray-600 w-screen h-screen" : ""}`}>
      <div
        className={`bg-tertiary w-96 h-52 p-2 xl:w-[480px] mx-auto rounded-lg flex justify-center items-center gap-x-3 ${
          popup ? "bg-black w-screen h-screen" : ""
        }`}
      >
        <img
          src={image}
          alt=""
          className="w-[45%] h-[95%] lg:w-[40%] rounded-lg object-cover"
        />
        <div className="w-1/2 h-full mt-8">
          <p>
            <span className="">Crop</span>{" "}
            <span className="text-primary font-semibold text-[16.8px] capitalize">
              {crop}
            </span>
          </p>
          <p>
            <span className="">Name</span>{" "}
            <span className="text-primary font-semibold text-[16.8px] capitalize">
              {name}
            </span>
          </p>
          <p>
            <span className="">Type</span>{" "}
            <span className="text-primary font-semibold text-[16.8px] capitalize">
              {type}
            </span>
          </p>
          <div className="mt-4">
            <button
              onClick={() => {
                setPopup(!popup);
              }}
              className="px-3 py-2 bg-primary text-tertiary rounded-md"
            >
              Show More
            </button>
          </div>
        </div>
      </div>
    // </div>
  );
}
export default DiseaseRemedy;