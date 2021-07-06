import { createSlice } from "@reduxjs/toolkit";

export const OctProgressSlice = createSlice({
  name: "OctProgress",
  initialState: { OctProgress: 0 },
  reducers: {
    Increment: (state) => {
      state.OctProgress = state.OctProgress += 25;
    },
    Decrement: (state) => {
      state.OctProgress = state.OctProgress -= 25;
    },
  },
});

export const { Increment, Decrement } = OctProgressSlice.actions;

export default OctProgressSlice.reducer;
