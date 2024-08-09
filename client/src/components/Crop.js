import { useState } from "react";
import { useDispatch } from "react-redux";
import { add, remove } from "../app/features/overview-crops/overviewCropsSlice";

const Crop = ({ crop, overviewCrops }) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const toggleCrop = (e) => {
    // Toggle the selection state
    setSelected((prevSelected) => !prevSelected);

    // (already not selected) If selected is false, add the crop to overviewCrops
    if (!selected) {
      dispatch(add(crop));
      // setOverviewCrops((prevCrops) => [...prevCrops, crop]);
    } else {
      // (already selected) If selected is true remove the crop from overviewCrops
      dispatch(remove(crop));
      // setOverviewCrops((prevCrops) =>
      //   prevCrops.filter((item) => item !== crop),
      // );
    }
  };

  // check whether the crop is already present in the overviewCrops -> if present show in green color
  // to persist the color when navigate back to the select-crops
  let selectBg = false;
  if (overviewCrops && overviewCrops.includes(crop)) {
    selectBg = true;
  }

  return (
    <span
      onClick={toggleCrop}
      className={`select-none font-semibold inline-block border-2 border-primary px-4 py-2 rounded-2xl mx-2 my-2 cursor-pointer ${
        selectBg ? "bg-primary text-secondary" : ""
      }`}
    >
      {crop}
    </span>
  );
};
export default Crop;
