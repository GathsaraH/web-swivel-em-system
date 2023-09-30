import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface InitialEmployeeSlice {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  isLoading: boolean;
  listViewAction: ListViewEnum;
  error: string;
  allEmployee: SelectedEmployeeType[];
  selectedEmployee: SelectedEmployeeType;
  deleteConformationDetails: DeleteEmployeeConformationField;
}
export interface ListViewActionType {
  listViewAction: ListViewEnum;
}
export enum ListViewEnum {
  GRID_VIEW = "grid_view",
  TABLE_VIEW = "table_view",
}

export interface AddEmployeeType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  router: any;
}
export interface EditEmployeeDataType {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  gender?: string;
}
export interface GetAllEmployeeType {
  data: SelectedEmployeeType[];
}
export interface EditEmployeeType {
  employeeId: string;
  data: EditEmployeeDataType;
  router: any;
}

export interface SelectedEmployeeType {
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
}

export interface DeleteEmployeeConformationField {
  employeeId: string;
  isModelOpen: boolean;
}
