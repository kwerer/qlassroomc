import { createSlice } from "@reduxjs/toolkit";

export const Topic123Slice = createSlice({
  name: "Topic123",
  initialState: { Topic123: 0 },
  reducers: {
    T3True: (state) => {
      state.Topic123 = 1;
    },
    T3False: (state) => {
      state.Topic123 = 0;
    },
  },
});

export const { T3True, T3False } = Topic123Slice.actions;

export default Topic123Slice.reducer;
