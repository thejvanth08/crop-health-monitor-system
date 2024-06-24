import MapComponent from "./MapComponent";
import { diseaseRemedies } from "../constants/constants";
import DiseaseRemedy from "./DiseaseRemedy";
import loadingAnimation from "../assets/animations/loading-animation.gif";

const AnalysisDetails = ({ status, detections, uniqueDiseases }) => {

  // choosing only the remedies for detected crops
  let uniqueDiseaseRemedies = diseaseRemedies.filter((diseaseRemedy) => uniqueDiseases.includes(diseaseRemedy.disease));

  if (status === "not uploaded") {
    return <div className="bg-secondary text-lg font-semibold text-center max-w-80 p-3 mt-10 mx-auto rounded-lg">Upload Your Images First !</div>;
  } else if (status === "processing") {
    return (
      <div className="text-lg font-semibold text-center max-w-80 p-3 mt-10 mx-auto rounded-lg">
        <img
          src={loadingAnimation}
          alt=""
          className="block w-20 h-20 mx-auto lg:w-32 lg:h-32"
        />
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <>
        <div>
          <h2 className="text-primary text-xl font-semibold text-center mt-12 mb-3.5">
            Plots of Diseased Crops
          </h2>
          <div className="max-w-[800px] h-[400px] overflow-hidden shadow-xl shadow-grey rounded-md mx-auto -z-50">
            <MapComponent detections={detections}></MapComponent>
          </div>
        </div>

        <div>
          <h2 className="text-primary text-xl font-semibold text-center mt-12 mb-3.5">
            Diseased Crops & its Remedies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-2 gap-y-8 lg:gap-x-0 mb-10">
            {uniqueDiseaseRemedies.map((diseaseRemedy, index) => (
              <DiseaseRemedy key={index} {...diseaseRemedy}></DiseaseRemedy>
            ))}
          </div>
        </div>

        <button className="block mx-auto px-3 py-2 bg-secondary text-primary text-lg font-semibold rounded-md">
          Download Report
        </button>
      </>
    );
  }
};
export default AnalysisDetails;
