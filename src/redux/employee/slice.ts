import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialEmployeeSlice, ListViewActionType, ListViewEnum } from "./type";

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
  listViewAction: ListViewEnum.GRID_VIEW,
};

const employeeSlice = createSlice({
  name: "employeeSlice",
  initialState: initialEmployeeState,
  reducers: {
    changeListView: (state, action: PayloadAction<ListViewActionType>) => {
      state.listViewAction = action.payload.listViewAction;
    },
  },
});

export const { actions: employeeActions, reducer: employeeReducer } =
  employeeSlice;
