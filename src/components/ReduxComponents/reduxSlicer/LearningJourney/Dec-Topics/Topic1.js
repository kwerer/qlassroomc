import { createSlice } from "@reduxjs/toolkit";

export const Topic121Slice = createSlice({
  name: "Topic121",
  initialState: { Topic121: 0 },
  reducers: {
    T1True: (state) => {
      state.Topic121 = 1;
    },
    T1False: (state) => {
      state.Topic121 = 0;
    },
  },
});

export const { T1True, T1False } = Topic121Slice.actions;

export default Topic121Slice.reducer;
