import { useState } from "react";

const CropName = ({ name, setSelectedCrop, selectedCrop }) => {
  const handleClick = () => {
    setSelectedCrop(name);
  };

  return (
    // why primary is not working properly
    <button
      onClick={handleClick}
      className={`shrink-0 text-xl font-bold w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 p-4 lg:p-7 mr-3 rounded-xl text-center ${
        selectedCrop === name ? "text-tertiary bg-primary" : "text-primary bg-tertiary"
      }`}
    >
      {name}
    </button>
  );
};

export default CropName;
