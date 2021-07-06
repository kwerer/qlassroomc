import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
let Today = moment();
export const CurrentDate = createSlice({
  name: "CurrentDate",
  initialState: { CurrentDate: Today.format("DD") },
  reducers: {
    ClickDate: (state) => {
      state.CurrentDate = 1;
    },
  },
});

export const { ClickDate } = CurrentDate.actions;

export default CurrentDate.reducer;
