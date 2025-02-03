import { FiDownload } from "react-icons/fi";

const Report = ({ id, date }) => {
  const handleDownload = () => {
    const fileUrl = "/report.pdf"; // Replace with the actual file path

    // Create an anchor element and trigger the download
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "report.pdf"; // Set the downloaded file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="bg-tertiary max-w-[800px] px-4 py-4 md:px-8 mx-auto mb-3 flex justify-between items-center rounded-xl">
      <div>
        <p className="text-lg font-bold">REPORT {id}</p>
        <p>Date: {date}</p>
      </div>
      <div
        className="w-12 h-12 bg-primary text-secondary rounded-full cursor-pointer flex items-center justify-center"
        onClick={handleDownload} // Attach click event
      >
        <FiDownload className="p-2 w-full h-full" size={40} />
      </div>
    </div>
  );
};

export default Report;
