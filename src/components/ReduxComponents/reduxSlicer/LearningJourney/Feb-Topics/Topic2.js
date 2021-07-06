import { createSlice } from "@reduxjs/toolkit";

export const Topic22Slice = createSlice({
  name: "Topic22",
  initialState: { Topic22: 0 },
  reducers: {
    T2True: (state) => {
      state.Topic22 = 1;
    },
    T2False: (state) => {
      state.Topic22 = 0;
    },
  },
});

export const { T2True, T2False } = Topic22Slice.actions;

export default Topic22Slice.reducer;
