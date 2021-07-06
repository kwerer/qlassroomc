import { createSlice } from "@reduxjs/toolkit";

export const Topic41Slice = createSlice({
  name: "Topic41",
  initialState: { Topic41: 0 },
  reducers: {
    T1True: (state) => {
      state.Topic41 = 1;
    },
    T1False: (state) => {
      state.Topic41 = 0;
    },
  },
});

export const { T1True, T1False } = Topic41Slice.actions;

export default Topic41Slice.reducer;
