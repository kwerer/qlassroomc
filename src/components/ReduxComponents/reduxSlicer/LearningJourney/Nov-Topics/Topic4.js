import { createSlice } from "@reduxjs/toolkit";

export const Topic114Slice = createSlice({
  name: "Topic114",
  initialState: { Topic114: 0 },
  reducers: {
    T4True: (state) => {
      state.Topic114 = 1;
    },
    T4False: (state) => {
      state.Topic114 = 0;
    },
  },
});

export const { T4True, T4False } = Topic114Slice.actions;

export default Topic114Slice.reducer;
