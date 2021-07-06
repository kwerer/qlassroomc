import { createSlice } from "@reduxjs/toolkit";

export const Topic14Slice = createSlice({
  name: "Topic14",
  initialState: { Topic14: 0 },
  reducers: {
    T4True: (state) => {
      state.Topic14 = 1;
    },
    T4False: (state) => {
      state.Topic14 = 0;
    },
  },
});

export const { T4True, T4False } = Topic14Slice.actions;

export default Topic14Slice.reducer;
