import { createSlice } from "@reduxjs/toolkit";

export const Topic74Slice = createSlice({
  name: "Topic74",
  initialState: { Topic74: 0 },
  reducers: {
    T4True: (state) => {
      state.Topic74 = 1;
    },
    T4False: (state) => {
      state.Topic74 = 0;
    },
  },
});

export const { T4True, T4False } = Topic74Slice.actions;

export default Topic74Slice.reducer;
