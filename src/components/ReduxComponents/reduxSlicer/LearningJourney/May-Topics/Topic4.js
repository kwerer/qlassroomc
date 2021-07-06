import { createSlice } from "@reduxjs/toolkit";

export const Topic54Slice = createSlice({
  name: "Topic54",
  initialState: { Topic54: 0 },
  reducers: {
    T4True: (state) => {
      state.Topic54 = 1;
    },
    T4False: (state) => {
      state.Topic54 = 0;
    },
  },
});

export const { T4True, T4False } = Topic54Slice.actions;

export default Topic54Slice.reducer;
