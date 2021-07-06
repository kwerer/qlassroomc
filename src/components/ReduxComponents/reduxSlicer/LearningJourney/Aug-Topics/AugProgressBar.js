import { createSlice } from "@reduxjs/toolkit";

export const AugProgressSlice = createSlice({
  name: "AugProgress",
  initialState: { AugProgress: 0 },
  reducers: {
    Increment: (state) => {
      state.AugProgress = state.AugProgress += 25;
    },
    Decrement: (state) => {
      state.AugProgress = state.AugProgress -= 25;
    },
  },
});

export const { Increment, Decrement } = AugProgressSlice.actions;

export default AugProgressSlice.reducer;
