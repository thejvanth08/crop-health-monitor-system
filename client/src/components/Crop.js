import { useState } from "react";

const Crop = ({crop, overviewCrops, setOverviewCrops}) => {

  const [selected, setSelected] = useState(false);

  const toggleCrop = (e) => {
    // Toggle the selection state
    setSelected((prevSelected) => !prevSelected);

    // If selected is true, add the crop to overviewCrops
    if (!selected) {
      setOverviewCrops((prevCrops) => [...prevCrops, crop]);
    } else {
      // If selected is false, remove the crop from overviewCrops
      setOverviewCrops((prevCrops) =>
        prevCrops.filter((item) => item !== crop)
      );
    }
  }

  return (
    <span onClick={toggleCrop} className={`white font-semibold inline-block border-2 border-primary px-4 py-2 rounded-2xl mx-2 my-2 cursor-pointer ${selected ? "bg-primary text-tertiary" : ""}`}>{crop}</span>
  )
}
export default Crop;