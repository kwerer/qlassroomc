import { createSlice } from "@reduxjs/toolkit";

export const AprProgressSlice = createSlice({
  name: "AprProgress",
  initialState: { AprProgress: 0 },
  reducers: {
    Increment: (state) => {
      state.AprProgress = state.AprProgress += 25;
    },
    Decrement: (state) => {
      state.AprProgress = state.AprProgress -= 25;
    },
  },
});

export const { Increment, Decrement } = AprProgressSlice.actions;

export default AprProgressSlice.reducer;
