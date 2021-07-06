import { createSlice } from "@reduxjs/toolkit";

export const Topic84Slice = createSlice({
  name: "Topic84",
  initialState: { Topic84: 0 },
  reducers: {
    T4True: (state) => {
      state.Topic84 = 1;
    },
    T4False: (state) => {
      state.Topic84 = 0;
    },
  },
});

export const { T4True, T4False } = Topic84Slice.actions;

export default Topic84Slice.reducer;
