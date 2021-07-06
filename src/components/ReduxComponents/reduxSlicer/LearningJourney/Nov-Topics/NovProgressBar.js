import { createSlice } from "@reduxjs/toolkit";

export const NovProgressSlice = createSlice({
  name: "NovProgress",
  initialState: { NovProgress: 0 },
  reducers: {
    Increment: (state) => {
      state.NovProgress = state.NovProgress += 25;
    },
    Decrement: (state) => {
      state.NovProgress = state.NovProgress -= 25;
    },
  },
});

export const { Increment, Decrement } = NovProgressSlice.actions;

export default NovProgressSlice.reducer;
