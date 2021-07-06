import { createSlice } from "@reduxjs/toolkit";

export const JulProgressSlice = createSlice({
  name: "JulProgress",
  initialState: { JulProgress: 0 },
  reducers: {
    Increment: (state) => {
      state.JulProgress = state.JulProgress += 25;
    },
    Decrement: (state) => {
      state.JulProgress = state.JulProgress -= 25;
    },
  },
});

export const { Increment, Decrement } = JulProgressSlice.actions;

export default JulProgressSlice.reducer;
