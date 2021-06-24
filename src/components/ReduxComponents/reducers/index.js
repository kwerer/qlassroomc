import ChangeTabReducer from "./ChangeTabReducer";
import PressedBackReducer from "./PressedBackReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  ChangeTab: ChangeTabReducer,
  PressedBack: PressedBackReducer,
});
export default allReducers;
