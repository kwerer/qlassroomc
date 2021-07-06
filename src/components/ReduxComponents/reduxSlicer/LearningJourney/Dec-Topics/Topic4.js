import { createSlice } from "@reduxjs/toolkit";

export const Topic124Slice = createSlice({
  name: "Topic124",
  initialState: { Topic124: 0 },
  reducers: {
    T4True: (state) => {
      state.Topic124 = 1;
    },
    T4False: (state) => {
      state.Topic124 = 0;
    },
  },
});

export const { T4True, T4False } = Topic124Slice.actions;

export default Topic124Slice.reducer;
