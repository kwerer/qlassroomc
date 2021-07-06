import { createSlice } from "@reduxjs/toolkit";

export const Topic82Slice = createSlice({
  name: "Topic82",
  initialState: { Topic82: 0 },
  reducers: {
    T2True: (state) => {
      state.Topic82 = 1;
    },
    T2False: (state) => {
      state.Topic82 = 0;
    },
  },
});

export const { T2True, T2False } = Topic82Slice.actions;

export default Topic82Slice.reducer;
