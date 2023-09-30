export interface InitialEmployeeSlice {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  isLoading: boolean;
  listViewAction: ListViewEnum;
  error: string;
  allEmployee: AddEmployeeType[];
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
}

export interface GetAllEmployeeType {
  data: AddEmployeeType[];
}
export interface EditEmployeeType { 
  employeeId: string;
}
