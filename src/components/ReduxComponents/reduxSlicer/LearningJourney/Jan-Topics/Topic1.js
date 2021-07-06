import { createSlice } from "@reduxjs/toolkit";

export const Topic11Slice = createSlice({
  name: "Topic11",
  initialState: { Topic11: 0 },
  reducers: {
    T1True: (state) => {
      state.Topic11 = 1;
    },
    T1False: (state) => {
      state.Topic11 = 0;
    },
  },
});

export const { T1True, T1False } = Topic11Slice.actions;

export default Topic11Slice.reducer;
