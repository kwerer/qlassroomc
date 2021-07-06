import { createSlice } from "@reduxjs/toolkit";

export const Topic34Slice = createSlice({
  name: "Topic34",
  initialState: { Topic34: 0 },
  reducers: {
    T4True: (state) => {
      state.Topic34 = 1;
    },
    T4False: (state) => {
      state.Topic34 = 0;
    },
  },
});

export const { T4True, T4False } = Topic34Slice.actions;

export default Topic34Slice.reducer;
