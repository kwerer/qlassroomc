import ChangeTabReducer from "./ChangeTabReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  ChangeTab: ChangeTabReducer,
});
export default allReducers;
