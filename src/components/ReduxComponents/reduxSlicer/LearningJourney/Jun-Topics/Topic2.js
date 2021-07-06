import { createSlice } from "@reduxjs/toolkit";

export const Topic62Slice = createSlice({
  name: "Topic62",
  initialState: { Topic62: 0 },
  reducers: {
    T2True: (state) => {
      state.Topic62 = 1;
    },
    T2False: (state) => {
      state.Topic62 = 0;
    },
  },
});

export const { T2True, T2False } = Topic62Slice.actions;

export default Topic62Slice.reducer;
