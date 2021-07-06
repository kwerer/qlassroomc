import { createSlice } from "@reduxjs/toolkit";

export const Topic81Slice = createSlice({
  name: "Topic81",
  initialState: { Topic81: 0 },
  reducers: {
    T1True: (state) => {
      state.Topic81 = 1;
    },
    T1False: (state) => {
      state.Topic81 = 0;
    },
  },
});

export const { T1True, T1False } = Topic81Slice.actions;

export default Topic81Slice.reducer;
