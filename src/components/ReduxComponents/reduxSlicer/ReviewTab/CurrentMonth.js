import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
let Today = moment();
export const CurrentMonth = createSlice({
  name: "CurrentMonth",
  initialState: { CurrentMonth: Today.format("MM") },
  reducers: {
    ClickMonth: (state) => {
      state.CurrentMonth = 1;
    },
  },
});

export const { ClickMonth } = CurrentMonth.actions;

export default CurrentMonth.reducer;
