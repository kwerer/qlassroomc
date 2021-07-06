import { createSlice } from "@reduxjs/toolkit";

export const Topic24Slice = createSlice({
  name: "Topic24",
  initialState: { Topic24: 0 },
  reducers: {
    T4True: (state) => {
      state.Topic24 = 1;
    },
    T4False: (state) => {
      state.Topic24 = 0;
    },
  },
});

export const { T4True, T4False } = Topic24Slice.actions;

export default Topic24Slice.reducer;
