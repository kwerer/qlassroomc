import { createSlice } from "@reduxjs/toolkit";

export const Topic32Slice = createSlice({
  name: "Topic32",
  initialState: { Topic32: 0 },
  reducers: {
    T2True: (state) => {
      state.Topic32 = 1;
    },
    T2False: (state) => {
      state.Topic32 = 0;
    },
  },
});

export const { T2True, T2False } = Topic32Slice.actions;

export default Topic32Slice.reducer;
