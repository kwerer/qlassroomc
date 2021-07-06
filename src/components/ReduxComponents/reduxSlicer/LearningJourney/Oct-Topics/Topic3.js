import { createSlice } from "@reduxjs/toolkit";

export const Topic103Slice = createSlice({
  name: "Topic103",
  initialState: { Topic103: 0 },
  reducers: {
    T3True: (state) => {
      state.Topic103 = 1;
    },
    T3False: (state) => {
      state.Topic103 = 0;
    },
  },
});

export const { T3True, T3False } = Topic103Slice.actions;

export default Topic103Slice.reducer;
