import { createSlice } from "@reduxjs/toolkit";

export const Topic101Slice = createSlice({
  name: "Topic101",
  initialState: { Topic101: 0 },
  reducers: {
    T1True: (state) => {
      state.Topic101 = 1;
    },
    T1False: (state) => {
      state.Topic101 = 0;
    },
  },
});

export const { T1True, T1False } = Topic101Slice.actions;

export default Topic101Slice.reducer;
