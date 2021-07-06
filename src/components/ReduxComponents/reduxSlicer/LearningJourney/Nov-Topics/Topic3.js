import { createSlice } from "@reduxjs/toolkit";

export const Topic113Slice = createSlice({
  name: "Topic113",
  initialState: { Topic113: 0 },
  reducers: {
    T3True: (state) => {
      state.Topic113 = 1;
    },
    T3False: (state) => {
      state.Topic113 = 0;
    },
  },
});

export const { T3True, T3False } = Topic113Slice.actions;

export default Topic113Slice.reducer;
