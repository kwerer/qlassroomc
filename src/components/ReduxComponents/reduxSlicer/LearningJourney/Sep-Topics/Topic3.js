import { createSlice } from "@reduxjs/toolkit";

export const Topic93Slice = createSlice({
  name: "Topic93",
  initialState: { Topic93: 0 },
  reducers: {
    T3True: (state) => {
      state.Topic93 = 1;
    },
    T3False: (state) => {
      state.Topic93 = 0;
    },
  },
});

export const { T3True, T3False } = Topic93Slice.actions;

export default Topic93Slice.reducer;
