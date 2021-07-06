import { createSlice } from "@reduxjs/toolkit";

export const JanProgressSlice = createSlice({
  name: "JanProgress",
  initialState: { JanProgress: 0 },
  reducers: {
    Increment: (state) => {
      state.JanProgress = state.JanProgress += 25;
    },
    Decrement: (state) => {
      state.JanProgress = state.JanProgress -= 25;
    },
  },
});

export const { Increment, Decrement } = JanProgressSlice.actions;

export default JanProgressSlice.reducer;
