import { createSlice } from "@reduxjs/toolkit";

export const SepProgressSlice = createSlice({
  name: "SepProgress",
  initialState: { SepProgress: 0 },
  reducers: {
    Increment: (state) => {
      state.SepProgress = state.SepProgress += 25;
    },
    Decrement: (state) => {
      state.SepProgress = state.SepProgress -= 25;
    },
  },
});

export const { Increment, Decrement } = SepProgressSlice.actions;

export default SepProgressSlice.reducer;
