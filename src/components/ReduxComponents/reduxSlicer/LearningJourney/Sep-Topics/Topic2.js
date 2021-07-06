import { createSlice } from "@reduxjs/toolkit";

export const Topic92Slice = createSlice({
  name: "Topic92",
  initialState: { Topic92: 0 },
  reducers: {
    T2True: (state) => {
      state.Topic92 = 1;
    },
    T2False: (state) => {
      state.Topic92 = 0;
    },
  },
});

export const { T2True, T2False } = Topic92Slice.actions;

export default Topic92Slice.reducer;
