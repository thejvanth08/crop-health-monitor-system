import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    value: {
      id: null,
      email: null,
    },
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectUserData = (state) => state.userData.value;

export const { set } = userDataSlice.actions;

export default userDataSlice.reducer;
