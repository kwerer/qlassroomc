import { createSlice } from "@reduxjs/toolkit";

export const Topic33Slice = createSlice({
  name: "Topic33",
  initialState: { Topic33: 0 },
  reducers: {
    T3True: (state) => {
      state.Topic33 = 1;
    },
    T3False: (state) => {
      state.Topic33 = 0;
    },
  },
});

export const { T3True, T3False } = Topic33Slice.actions;

export default Topic33Slice.reducer;
