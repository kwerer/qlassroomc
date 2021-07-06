import { createSlice } from "@reduxjs/toolkit";

export const FebProgressSlice = createSlice({
  name: "FebProgress",
  initialState: { FebProgress: 0 },
  reducers: {
    Increment: (state) => {
      state.FebProgress = state.FebProgress += 25;
    },
    Decrement: (state) => {
      state.FebProgress = state.FebProgress -= 25;
    },
  },
});

export const { Increment, Decrement } = FebProgressSlice.actions;

export default FebProgressSlice.reducer;
