import { createSlice } from "@reduxjs/toolkit";

export const Topic111Slice = createSlice({
  name: "Topic111",
  initialState: { Topic111: 0 },
  reducers: {
    T1True: (state) => {
      state.Topic111 = 1;
    },
    T1False: (state) => {
      state.Topic111 = 0;
    },
  },
});

export const { T1True, T1False } = Topic111Slice.actions;

export default Topic111Slice.reducer;
