import { createSlice } from "@reduxjs/toolkit";

export const LearningJourneyProgressSlice = createSlice({
  name: "LearningJourneyProgress",
  initialState: { Month: 0 },
  reducers: {
    ZeroMonth: (state) => {
      state.Month = 0;
    },
    Jan: (state) => {
      state.Month = 8.333;
    },
    Feb: (state) => {
      state.Month = 16.667;
    },
    Mar: (state) => {
      state.Month = 24.999;
    },
    Apr: (state) => {
      state.Month = 33.333;
    },
    May: (state) => {
      state.Month = 41.666;
    },
    Jun: (state) => {
      state.Month = 49.999;
    },
    Jul: (state) => {
      state.Month = 58.333;
    },
    Aug: (state) => {
      state.Month = 66.666;
    },
    Sep: (state) => {
      state.Month = 74.999;
    },
    Oct: (state) => {
      state.Month = 83.333;
    },
    Nov: (state) => {
      state.Month = 91.666;
    },
    Dec: (state) => {
      state.Month = 100;
    },
  },
});

export const {
  ZeroMonth,
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
} = LearningJourneyProgressSlice.actions;

export default LearningJourneyProgressSlice.reducer;
