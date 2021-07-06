import { createSlice } from "@reduxjs/toolkit";

export const Topic112Slice = createSlice({
  name: "Topic112",
  initialState: { Topic112: 0 },
  reducers: {
    T2True: (state) => {
      state.Topic112 = 1;
    },
    T2False: (state) => {
      state.Topic112 = 0;
    },
  },
});

export const { T2True, T2False } = Topic112Slice.actions;

export default Topic112Slice.reducer;
