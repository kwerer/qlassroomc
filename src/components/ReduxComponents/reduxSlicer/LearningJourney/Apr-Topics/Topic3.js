import { createSlice } from "@reduxjs/toolkit";

export const Topic43Slice = createSlice({
  name: "Topic43",
  initialState: { Topic43: 0 },
  reducers: {
    T3True: (state) => {
      state.Topic43 = 1;
    },
    T3False: (state) => {
      state.Topic43 = 0;
    },
  },
});

export const { T3True, T3False } = Topic43Slice.actions;

export default Topic43Slice.reducer;
