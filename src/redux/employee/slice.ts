import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  AddEmployeeType,
  DeleteEmployeeConformationField,
  EditEmployeeType,
  GetAllEmployeeType,
  InitialEmployeeSlice,
  ListViewActionType,
  ListViewEnum,
  SelectedEmployeeType,
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
  selectedEmployee: {
    email: "",
    firstName: "",
    gender: "",
    lastName: "",
    phoneNumber: "",
    employeeId: "",
  },
  deleteConformationDetails: {
    employeeId: "",
    isModelOpen: false,
  },
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
    deleteEmployee: (state, action: PayloadAction<{ employeeId: string }>) => {
      state.isLoading = true;
    },
    deleteEmployeeSuccess: (state) => {
      state.isLoading = false;
    },
    deleteEmployeeFiled: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload || "Something went wrong";
    },
    storeSelectedEmployee: (
      state,
      action: PayloadAction<SelectedEmployeeType>
    ) => {
      state.selectedEmployee.firstName = action.payload.firstName;
      state.selectedEmployee.lastName = action.payload.lastName;
      state.selectedEmployee.email = action.payload.email;
      state.selectedEmployee.phoneNumber = action.payload.phoneNumber;
      state.selectedEmployee.gender = action.payload.gender;
      state.selectedEmployee.employeeId = action.payload.employeeId;
    },
    resetSelectedEmployee: (state) => {
      state.selectedEmployee.firstName = "";
      state.selectedEmployee.lastName = "";
      state.selectedEmployee.email = "";
      state.selectedEmployee.phoneNumber = "";
      state.selectedEmployee.gender = "";
      state.selectedEmployee.employeeId = "";
    },
    handleDeleteModel: (
      state,
      action: PayloadAction<DeleteEmployeeConformationField>
    ) => {
      console.log({ action });

      state.deleteConformationDetails.isModelOpen = action.payload.isModelOpen;
      state.deleteConformationDetails.employeeId = action.payload.employeeId;
    },
  },
});

export const { actions: employeeActions, reducer: employeeReducer } =
  employeeSlice;
