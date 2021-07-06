import { createSlice } from "@reduxjs/toolkit";

export const Topic73Slice = createSlice({
  name: "Topic73",
  initialState: { Topic73: 0 },
  reducers: {
    T3True: (state) => {
      state.Topic73 = 1;
    },
    T3False: (state) => {
      state.Topic73 = 0;
    },
  },
});

export const { T3True, T3False } = Topic73Slice.actions;

export default Topic73Slice.reducer;
