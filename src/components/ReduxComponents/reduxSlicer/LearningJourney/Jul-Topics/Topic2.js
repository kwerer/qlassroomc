import { createSlice } from "@reduxjs/toolkit";

export const Topic72Slice = createSlice({
  name: "Topic72",
  initialState: { Topic72: 0 },
  reducers: {
    T2True: (state) => {
      state.Topic72 = 1;
    },
    T2False: (state) => {
      state.Topic72 = 0;
    },
  },
});

export const { T2True, T2False } = Topic72Slice.actions;

export default Topic72Slice.reducer;
