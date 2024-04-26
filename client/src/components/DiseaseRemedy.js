import { useState } from "react";

const DiseaseRemedy = ({ crop, disease, type, image, causes, remedies }) => {

  const [popup, setPopup] = useState(false); 



  return (
    // {/* Popup container */}
    // {popup && (
    //   <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
    //     {/* Popup content */}
    //     <div className="bg-white w-72 h-72 p-4 rounded-lg z-50">
    //       <h2 className="text-lg font-semibold mb-4">Popup Content</h2>
    //       <button
    //         onClick={() => setPopup(false)}
    //         className="px-3 py-2 bg-primary text-white rounded-md"
    //       >
    //         Close
    //       </button>
    //     </div>
    //   </div>
    // )}

    
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
        className={`bg-tertiary w-96 h-52 p-2 xl:w-[480px] mx-auto rounded-lg flex justify-center items-center gap-x-3 ${
          popup ? "h-[80vh] w-[600px] xl:w-[900px] flex-col overflow-auto" : ""
        }`}
      >
        <img
          src={image}
          alt=""
          className={`w-[45%] h-[95%] lg:w-[40%] rounded-lg object-cover ${popup ? "w-52 lg:w-52 h-52 mt-[160px]" : ""}`}
        />

        <div className={`w-1/2 h-full mt-8 ${popup ? "w-full p-5" : ""}`}>
          <p>
            <span className="">Crop</span>{" "}
            <span className="text-primary font-semibold text-[16.8px] capitalize">
              {crop}
            </span>
          </p>
          <p>
            <span className="">Disease</span>{" "}
            <span className="text-primary font-semibold text-[16.8px] capitalize">
              {disease}
            </span>
          </p>
          <p>
            <span className="">Type</span>{" "}
            <span className="text-primary font-semibold text-[16.8px] capitalize">
              {type}
            </span>
          </p>

          {/* show only during popup */}

          {popup && (
            <div>
              <div>
                <span className="">Causes</span>
                {causes.map((cause) => (
                  <li className="text-primary font-semibold text-[16.8px] capitalize list-none">
                    {cause}
                  </li>
                ))}
              </div>

              <div>
                <span className="">Remedies</span>
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