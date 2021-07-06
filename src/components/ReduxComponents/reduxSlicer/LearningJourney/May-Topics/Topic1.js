import { createSlice } from "@reduxjs/toolkit";

export const Topic51Slice = createSlice({
  name: "Topic51",
  initialState: { Topic51: 0 },
  reducers: {
    T1True: (state) => {
      state.Topic51 = 1;
    },
    T1False: (state) => {
      state.Topic51 = 0;
    },
  },
});

export const { T1True, T1False } = Topic51Slice.actions;

export default Topic51Slice.reducer;
