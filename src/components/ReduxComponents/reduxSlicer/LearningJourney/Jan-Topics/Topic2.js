import { createSlice } from "@reduxjs/toolkit";

export const Topic12Slice = createSlice({
  name: "Topic12",
  initialState: { Topic12: 0 },
  reducers: {
    T2True: (state) => {
      state.Topic12 = 1;
    },
    T2False: (state) => {
      state.Topic12 = 0;
    },
  },
});

export const { T2True, T2False } = Topic12Slice.actions;

export default Topic12Slice.reducer;
