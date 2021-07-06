import { createSlice } from "@reduxjs/toolkit";

export const Topic44Slice = createSlice({
  name: "Topic44",
  initialState: { Topic44: 0 },
  reducers: {
    T4True: (state) => {
      state.Topic44 = 1;
    },
    T4False: (state) => {
      state.Topic44 = 0;
    },
  },
});

export const { T4True, T4False } = Topic44Slice.actions;

export default Topic44Slice.reducer;
