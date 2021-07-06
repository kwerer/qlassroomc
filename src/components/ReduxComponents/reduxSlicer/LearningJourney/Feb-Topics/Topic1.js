import { createSlice } from "@reduxjs/toolkit";

export const Topic21Slice = createSlice({
  name: "Topic21",
  initialState: { Topic21: 0 },
  reducers: {
    T1True: (state) => {
      state.Topic21 = 1;
    },
    T1False: (state) => {
      state.Topic21 = 0;
    },
  },
});

export const { T1True, T1False } = Topic21Slice.actions;

export default Topic21Slice.reducer;
