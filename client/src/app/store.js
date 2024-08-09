import { configureStore } from "@reduxjs/toolkit";
import overviewCropsSlice from "./features/overview-crops/overviewCropsSlice";
import fieldsSlice from "./features/fields/fieldsSlice";

export default configureStore({
  reducer: {
    // any state updates regarding overviewCropsSlice will be handled by this reducer
    overviewCrops: overviewCropsSlice,
    fields: fieldsSlice,
  },
});
