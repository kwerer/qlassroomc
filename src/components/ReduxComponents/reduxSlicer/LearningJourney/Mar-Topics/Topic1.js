import { createSlice } from "@reduxjs/toolkit";

export const Topic31Slice = createSlice({
  name: "Topic31",
  initialState: { Topic31: 0 },
  reducers: {
    T1True: (state) => {
      state.Topic31 = 1;
    },
    T1False: (state) => {
      state.Topic31 = 0;
    },
  },
});

export const { T1True, T1False } = Topic31Slice.actions;

export default Topic31Slice.reducer;
