import { FiDownload } from "react-icons/fi";

const Report = ({ id, date }) => {
  return (
    <div className="bg-tertiary max-w-[800px] px-4 py-4 md:px-8 mx-auto mb-4 flex justify-between items-center rounded-xl">
      <div>
        <p className="text-lg font-bold">REPORT {id}</p>
        <p>Date: {date}</p>
      </div>
      <div className="w-12 h-12 bg-primary text-secondary rounded-full">
        <FiDownload className="p-2 w-full h-full" size={40}></FiDownload>
      </div>
    </div>
  );
};
export default Report;
