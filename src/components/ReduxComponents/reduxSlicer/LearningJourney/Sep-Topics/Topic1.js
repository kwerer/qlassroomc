import { createSlice } from "@reduxjs/toolkit";

export const Topic91Slice = createSlice({
  name: "Topic91",
  initialState: { Topic91: 0 },
  reducers: {
    T1True: (state) => {
      state.Topic91 = 1;
    },
    T1False: (state) => {
      state.Topic91 = 0;
    },
  },
});

export const { T1True, T1False } = Topic91Slice.actions;

export default Topic91Slice.reducer;
