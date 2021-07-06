import { createSlice } from "@reduxjs/toolkit";

export const MarProgressSlice = createSlice({
  name: "MarProgress",
  initialState: { MarProgress: 0 },
  reducers: {
    Increment: (state) => {
      state.MarProgress = state.MarProgress += 25;
    },
    Decrement: (state) => {
      state.MarProgress = state.MarProgress -= 25;
    },
  },
});

export const { Increment, Decrement } = MarProgressSlice.actions;

export default MarProgressSlice.reducer;
