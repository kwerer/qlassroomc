import { createSlice } from "@reduxjs/toolkit";

export const Topic83Slice = createSlice({
  name: "Topic83",
  initialState: { Topic83: 0 },
  reducers: {
    T3True: (state) => {
      state.Topic83 = 1;
    },
    T3False: (state) => {
      state.Topic83 = 0;
    },
  },
});

export const { T3True, T3False } = Topic83Slice.actions;

export default Topic83Slice.reducer;
