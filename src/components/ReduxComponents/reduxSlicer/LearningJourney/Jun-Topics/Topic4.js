import { createSlice } from "@reduxjs/toolkit";

export const Topic64Slice = createSlice({
  name: "Topic64",
  initialState: { Topic64: 0 },
  reducers: {
    T4True: (state) => {
      state.Topic64 = 1;
    },
    T4False: (state) => {
      state.Topic64 = 0;
    },
  },
});

export const { T4True, T4False } = Topic64Slice.actions;

export default Topic64Slice.reducer;
