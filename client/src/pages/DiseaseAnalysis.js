import MapComponent from "../components/MapComponent";
import { diseaseRemedies } from "../constants/contants";
import DiseaseRemedy from "../components/DiseaseRemedy";

const DiseaseAnalysis = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center">Disease Analysis</h1>
      <h2 className="text-primary text-xl font-semibold text-center mt-12 mb-3.5">
        Identify your crop diseases & Get suggestions
      </h2>
      <div className="bg-tertiary max-w-[400px] md:max-w-[600px] mx-auto px-4 py-6 rounded-2xl shadow-xl">
        <p className="text-lg font-semibold text-center mb-3">
          Upload your crop images here
        </p>
        <form action="/upload-images" method="POST">
          <input
            type="file"
            name="cropImages"
            id="cropImages"
            className="file"
            multiple
          />
          <label htmlFor="cropImages" className="file-label shadow-xl">
            Select Images
          </label>
        </form>
      </div>

      <div>
        <h2 className="text-primary text-xl font-semibold text-center mt-12 mb-3.5">
          Plots of Diseased Crops
        </h2>
        <div className="max-w-[800px] h-[400px] overflow-hidden shadow-lg shadow-grey rounded-md mx-auto -z-50">
          <MapComponent></MapComponent>
        </div>
      </div>

      <div>
        <h2 className="text-primary text-xl font-semibold text-center mt-12 mb-3.5">Diseased Crops &  it's Remedies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-2 gap-y-8 lg:gap-x-0">
          {
            diseaseRemedies.map((diseaseRemedy) => <DiseaseRemedy {...diseaseRemedy}>
            </DiseaseRemedy>)
          }
        </div>
      </div>


      <div className="h-72">
      </div>
    </div>
  );
}
export default DiseaseAnalysis;