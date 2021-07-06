import { createSlice } from "@reduxjs/toolkit";

export const Topic63Slice = createSlice({
  name: "Topic63",
  initialState: { Topic63: 0 },
  reducers: {
    T3True: (state) => {
      state.Topic63 = 1;
    },
    T3False: (state) => {
      state.Topic63 = 0;
    },
  },
});

export const { T3True, T3False } = Topic63Slice.actions;

export default Topic63Slice.reducer;
