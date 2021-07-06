import { createSlice } from "@reduxjs/toolkit";

export const JunProgressSlice = createSlice({
  name: "JunProgress",
  initialState: { JunProgress: 0 },
  reducers: {
    Increment: (state) => {
      state.JunProgress = state.JunProgress += 25;
    },
    Decrement: (state) => {
      state.JunProgress = state.JunProgress -= 25;
    },
  },
});

export const { Increment, Decrement } = JunProgressSlice.actions;

export default JunProgressSlice.reducer;
