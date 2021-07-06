import { createSlice } from "@reduxjs/toolkit";

export const Topic42Slice = createSlice({
  name: "Topic42",
  initialState: { Topic42: 0 },
  reducers: {
    T2True: (state) => {
      state.Topic42 = 1;
    },
    T2False: (state) => {
      state.Topic42 = 0;
    },
  },
});

export const { T2True, T2False } = Topic42Slice.actions;

export default Topic42Slice.reducer;
