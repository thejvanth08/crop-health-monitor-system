import { useState } from "react";

const DiseaseRemedy = ({ crop, disease, type, image, causes, remedies }) => {

  const [popup, setPopup] = useState(false); 



  return (
    // popup window
    <div
      className={` flex items-center ${
        popup
          ? "fixed top-0 left-0 w-screen h-screen z-[10000] bg-black bg-opacity-60"
          : ""
      }`}
    >
      {/* card */}
      <div
        className={`bg-tertiary w-96 h-52 p-2 xl:w-[480px] mx-auto rounded-lg flex justify-center items-center gap-x-3 shadow-lg ${
          popup ? "h-[80vh] w-[600px] xl:w-[900px] flex-col overflow-auto" : ""
        }`}
      >
        <img
          src={image}
          alt=""
          className={`w-[45%] h-[95%] lg:w-[40%] rounded-lg object-cover ${
            popup ? "w-52 lg:w-52 h-52 mt-[160px]" : ""
          }`}
        />

        <div className={`w-1/2 h-full mt-8 ${popup ? "w-full p-5" : ""}`}>
          <p>
            <span className="font-semibold">Crop:</span>{" "}
            <span className="text-primary font-semibold text-[16.8px] capitalize">
              {crop}
            </span>
          </p>
          <p>
            <span className="font-semibold">Disease:</span>{" "}
            <span className="text-primary font-semibold text-[16.8px] capitalize">
              {disease}
            </span>
          </p>
          <p>
            <span className="font-semibold">Type:</span>{" "}
            <span className="text-primary font-semibold text-[16.8px] capitalize">
              {type}
            </span>
          </p>

          {/* show only during popup */}

          {popup && (
            <div>
              <div>
                <span className="font-semibold">Causes:</span>
                {causes.map((cause) => (
                  <li className="text-primary font-semibold text-[16.8px] capitalize list-none">
                    {cause}
                  </li>
                ))}
              </div>

              <div>
                <span className="font-semibold">Remedies:</span>
                {remedies.map((remedy) => (
                  <li className="text-primary font-semibold text-[16.8px] capitalize list-none">
                    {remedy}
                  </li>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4">
            <button
              onClick={() => {
                setPopup(!popup);
              }}
              className="px-3 py-2 bg-primary text-tertiary rounded-md"
            >
              {popup ? "Close" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DiseaseRemedy;