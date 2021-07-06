import { createSlice } from "@reduxjs/toolkit";

export const MayProgressSlice = createSlice({
  name: "MayProgress",
  initialState: { MayProgress: 0 },
  reducers: {
    Increment: (state) => {
      state.MayProgress = state.MayProgress += 25;
    },
    Decrement: (state) => {
      state.MayProgress = state.MayProgress -= 25;
    },
  },
});

export const { Increment, Decrement } = MayProgressSlice.actions;

export default MayProgressSlice.reducer;
