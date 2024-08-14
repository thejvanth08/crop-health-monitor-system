import { createSlice } from "@reduxjs/toolkit";

export const overviewCropsSlice = createSlice({
  name: "overviewCrops",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    remove: (state, action) => {
      state.value = state.value.filter((item) => item != action.payload);
    },
    syncOverviewCrops: (state, action) => {
      state.value = action.payload;
    },
  },
});

// selector function (state represents entire global state of app)
// overview crops slice = { value: [...] }
export const selectAllOverviewCrops = (state) => state.overviewCrops.value;

// action creator functions (which returns action objects when it is invoked)
export const { add, remove, syncOverviewCrops } = overviewCropsSlice.actions;

// this is for redux store
export default overviewCropsSlice.reducer;
