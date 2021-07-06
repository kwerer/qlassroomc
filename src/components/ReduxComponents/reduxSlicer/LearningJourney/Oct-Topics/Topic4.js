import { createSlice } from "@reduxjs/toolkit";

export const Topic104Slice = createSlice({
  name: "Topic104",
  initialState: { Topic104: 0 },
  reducers: {
    T4True: (state) => {
      state.Topic104 = 1;
    },
    T4False: (state) => {
      state.Topic104 = 0;
    },
  },
});

export const { T4True, T4False } = Topic104Slice.actions;

export default Topic104Slice.reducer;
