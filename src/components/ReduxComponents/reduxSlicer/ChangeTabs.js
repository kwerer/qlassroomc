import { createSlice } from "@reduxjs/toolkit";

export const changeTabSlice = createSlice({
  name: "ChangeTab",
  initialState: { TabNumber: 0 },
  reducers: {
    Tab0: (state) => {
      state.TabNumber = 0;
    },
    Tab1: (state) => {
      state.TabNumber = 1;
    },
    Tab2: (state) => {
      state.TabNumber = 2;
    },
    Tab3: (state) => {
      state.TabNumber = 3;
    },
    Tab4: (state) => {
      state.TabNumber = 4;
    },
  },
});

export const { Tab0, Tab1, Tab2, Tab3, Tab4 } = changeTabSlice.actions;

export default changeTabSlice.reducer;
