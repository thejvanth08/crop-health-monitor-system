import { createSlice } from "@reduxjs/toolkit";

export const fieldsSlice = createSlice({
  name: "fields",
  initialState: {
    value: [], // array of objects
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    syncFields: (state, action) => {
      state.value = action.payload;
    },
  },
});

// selector function
export const selectAllFields = (state) => state.fields.value;

// action creators
export const { add, syncFields } = fieldsSlice.actions;

// for redux store
export default fieldsSlice.reducer;
