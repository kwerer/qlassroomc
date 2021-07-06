import { createSlice } from "@reduxjs/toolkit";

export const Topic94Slice = createSlice({
  name: "Topic94",
  initialState: { Topic94: 0 },
  reducers: {
    T4True: (state) => {
      state.Topic94 = 1;
    },
    T4False: (state) => {
      state.Topic94 = 0;
    },
  },
});

export const { T4True, T4False } = Topic94Slice.actions;

export default Topic94Slice.reducer;
