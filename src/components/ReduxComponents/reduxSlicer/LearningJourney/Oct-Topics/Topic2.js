import { createSlice } from "@reduxjs/toolkit";

export const Topic102Slice = createSlice({
  name: "Topic102",
  initialState: { Topic102: 0 },
  reducers: {
    T2True: (state) => {
      state.Topic102 = 1;
    },
    T2False: (state) => {
      state.Topic102 = 0;
    },
  },
});

export const { T2True, T2False } = Topic102Slice.actions;

export default Topic102Slice.reducer;
