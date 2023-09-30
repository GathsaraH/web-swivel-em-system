import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  AddEmployeeType,
  EditEmployeeType,
  GetAllEmployeeType,
  InitialEmployeeSlice,
  ListViewActionType,
  ListViewEnum,
} from "./type";

/**
 * Defines the initial state for the employee slice of the Redux store.
 */
export const initialEmployeeState: InitialEmployeeSlice = {
  email: "",
  firstName: "",
  gender: "",
  lastName: "",
  phoneNumber: "",
  error: "",
  allEmployee: [],
  isLoading: false,
  listViewAction: ListViewEnum.TABLE_VIEW,
};

const employeeSlice = createSlice({
  name: "employeeSlice",
  initialState: initialEmployeeState,
  reducers: {
    changeListView: (state, action: PayloadAction<ListViewActionType>) => {
      state.listViewAction = action.payload.listViewAction;
    },
    addEmployee: (state, action: PayloadAction<AddEmployeeType>) => {
      state.isLoading = true;
    },
    addEmployeeSuccess: (state) => {
      state.isLoading = false;
    },
    addEmployeeFiled: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload || "Something went wrong";
    },
    getAllEmployee: (state) => {
      state.isLoading = true;
    },
    getAllEmployeeSuccess: (
      state,
      action: PayloadAction<GetAllEmployeeType>
    ) => {
      state.isLoading = false;
      state.allEmployee = action.payload.data;
    },
    getAllEmployeeFiled: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload || "Something went wrong";
    },
    editEmployee: (state, action: PayloadAction<EditEmployeeType>) => {
      state.isLoading = true;
    },
    editEmployeeSuccess: (state) => {
      state.isLoading = false;
    },
    editEmployeeFiled: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload || "Something went wrong";
    },
  },
});

export const { actions: employeeActions, reducer: employeeReducer } =
  employeeSlice;
