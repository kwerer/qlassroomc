import { createSlice } from "@reduxjs/toolkit";

export const DecProgressSlice = createSlice({
  name: "DecProgress",
  initialState: { DecProgress: 0 },
  reducers: {
    Increment: (state) => {
      state.DecProgress = state.DecProgress += 25;
    },
    Decrement: (state) => {
      state.DecProgress = state.DecProgress -= 25;
    },
  },
});

export const { Increment, Decrement } = DecProgressSlice.actions;

export default DecProgressSlice.reducer;
