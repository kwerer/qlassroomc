import { createSlice } from "@reduxjs/toolkit";

export const Topic53Slice = createSlice({
  name: "Topic53",
  initialState: { Topic53: 0 },
  reducers: {
    T3True: (state) => {
      state.Topic53 = 1;
    },
    T3False: (state) => {
      state.Topic53 = 0;
    },
  },
});

export const { T3True, T3False } = Topic53Slice.actions;

export default Topic53Slice.reducer;
