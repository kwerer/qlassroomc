import { createSlice } from "@reduxjs/toolkit";

export const Topic61Slice = createSlice({
  name: "Topic61",
  initialState: { Topic61: 0 },
  reducers: {
    T1True: (state) => {
      state.Topic61 = 1;
    },
    T1False: (state) => {
      state.Topic61 = 0;
    },
  },
});

export const { T1True, T1False } = Topic61Slice.actions;

export default Topic61Slice.reducer;
