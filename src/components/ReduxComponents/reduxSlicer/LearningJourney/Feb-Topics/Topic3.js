import { createSlice } from "@reduxjs/toolkit";

export const Topic23Slice = createSlice({
  name: "Topic23",
  initialState: { Topic23: 0 },
  reducers: {
    T3True: (state) => {
      state.Topic23 = 1;
    },
    T3False: (state) => {
      state.Topic23 = 0;
    },
  },
});

export const { T3True, T3False } = Topic23Slice.actions;

export default Topic23Slice.reducer;
