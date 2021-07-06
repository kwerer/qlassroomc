import { createSlice } from "@reduxjs/toolkit";

export const questionNumberSlice = createSlice({
  name: "Question Number",
  initialState: { QnNo: 1 },
  reducers: {
    Q1: (state) => {
      state.QnNo = 1;
    },
    Q2: (state) => {
      state.QnNo = 2;
    },
    Q3: (state) => {
      state.QnNo = 3;
    },
    Q4: (state) => {
      state.QnNo = 4;
    },
    Q5: (state) => {
      state.QnNo = 5;
    },
    Q6: (state) => {
      state.QnNo = 6;
    },
    Q7: (state) => {
      state.QnNo = 7;
    },
    Q8: (state) => {
      state.QnNo = 8;
    },
    Q9: (state) => {
      state.QnNo = 9;
    },
    Q10: (state) => {
      state.QnNo = 10;
    },
    Q11: (state) => {
      state.QnNo = 11;
    },
    Q12: (state) => {
      state.QnNo = 12;
    },
    Q13: (state) => {
      state.QnNo = 13;
    },
    Q14: (state) => {
      state.QnNo = 14;
    },
    Q15: (state) => {
      state.QnNo = 15;
    },
    NextQn: (state) => {
      state.QnNo += 1;
    },
    PrevQn: (state) => {
      state.QnNo -= 1;
    },
  },
});

export const {
  Q1,
  Q2,
  Q3,
  Q4,
  Q5,
  Q6,
  Q7,
  Q8,
  Q9,
  Q10,
  Q11,
  Q12,
  Q13,
  Q14,
  Q15,
  NextQn,
  PrevQn,
} = questionNumberSlice.actions;

export default questionNumberSlice.reducer;
