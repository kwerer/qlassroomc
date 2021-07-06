import { createSlice } from "@reduxjs/toolkit";

export const Topic122Slice = createSlice({
  name: "Topic122",
  initialState: { Topic122: 0 },
  reducers: {
    T2True: (state) => {
      state.Topic122 = 1;
    },
    T2False: (state) => {
      state.Topic122 = 0;
    },
  },
});

export const { T2True, T2False } = Topic122Slice.actions;

export default Topic122Slice.reducer;
