import { createSlice } from "@reduxjs/toolkit";

export const Topic52Slice = createSlice({
  name: "Topic52",
  initialState: { Topic52: 0 },
  reducers: {
    T2True: (state) => {
      state.Topic52 = 1;
    },
    T2False: (state) => {
      state.Topic52 = 0;
    },
  },
});

export const { T2True, T2False } = Topic52Slice.actions;

export default Topic52Slice.reducer;
