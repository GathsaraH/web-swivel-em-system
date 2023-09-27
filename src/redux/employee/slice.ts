import { createSlice } from "@reduxjs/toolkit";
import { InitialEmployeeSlice } from "./type";

/**
 * Defines the initial state for the employee slice of the Redux store.
 */
export const initialEmployeeState: InitialEmployeeSlice = {
  email: "",
  firstName: "",
  gender: "",
  lastName: "",
  phoneNumber: "",
  isLoading: false,
};

const employeeSlice = createSlice({
  name: "employeeSlice",
  initialState: initialEmployeeState,
  reducers: {},
});

export const { actions: employeeActions, reducer: employeeReducer } =
  employeeSlice;
