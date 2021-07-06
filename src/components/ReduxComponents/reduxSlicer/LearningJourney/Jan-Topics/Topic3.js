import { createSlice } from "@reduxjs/toolkit";

export const Topic13Slice = createSlice({
  name: "Topic13",
  initialState: { Topic13: 0 },
  reducers: {
    T3True: (state) => {
      state.Topic13 = 1;
    },
    T3False: (state) => {
      state.Topic13 = 0;
    },
  },
});

export const { T3True, T3False } = Topic13Slice.actions;

export default Topic13Slice.reducer;
