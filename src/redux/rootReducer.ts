import { combineReducers } from "@reduxjs/toolkit";
import { employeeReducer } from "./employee/slice";

const rootReducer = combineReducers({
  employeeReducer: employeeReducer,
});
export default rootReducer;
