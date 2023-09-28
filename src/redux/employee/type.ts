export interface InitialEmployeeSlice {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  isLoading: boolean;
  listViewAction: ListViewEnum;
}
export interface ListViewActionType{
  listViewAction: ListViewEnum;
}
export enum ListViewEnum {
  GRID_VIEW = "grid_view",
  TABLE_VIEW = "table_view",
}
