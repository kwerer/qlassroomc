import { createSlice } from "@reduxjs/toolkit";

export const Topic71Slice = createSlice({
  name: "Topic71",
  initialState: { Topic71: 0 },
  reducers: {
    T1True: (state) => {
      state.Topic71 = 1;
    },
    T1False: (state) => {
      state.Topic71 = 0;
    },
  },
});

export const { T1True, T1False } = Topic71Slice.actions;

export default Topic71Slice.reducer;
