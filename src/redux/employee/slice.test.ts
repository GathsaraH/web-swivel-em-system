import { configureStore, AnyAction } from "@reduxjs/toolkit";
import { employeeActions, employeeReducer } from "./slice";
import { InitialEmployeeSlice, ListViewEnum } from "./type";

describe("employeeSlice", () => {
  let store: ReturnType<typeof configureStore>;
  const initialEmployeeState: InitialEmployeeSlice = {
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
    allEmployee: [],
    isLoading: false,
    listViewAction: ListViewEnum.TABLE_VIEW,
  };

  beforeEach(() => {
    store = configureStore({
      reducer: {
        employee: employeeReducer,
      },
    });
  });
  it("should initialize with the initial state", () => {
    const state = store.getState() as ReturnType<typeof employeeReducer>;
    expect(initialEmployeeState).toEqual(initialEmployeeState);
  });
  it("should change the list view", () => {
    const listViewAction = ListViewEnum.TABLE_VIEW;
    store.dispatch(
      employeeActions.changeListView({
        listViewAction: ListViewEnum.TABLE_VIEW,
      })
    );
    const state = store.getState() as ReturnType<typeof employeeReducer>;
    expect(state.listViewAction).toEqual(listViewAction);
  });

  it("should start adding an employee", () => {
    store.dispatch(
      employeeActions.addEmployee({
        firstName: "Gathsara",
        email: "gathsara@gmail.com",
        gender: "male",
        lastName: "umesh",
        phoneNumber: "0771234567",
      })
    );
    const state = store.getState() as ReturnType<typeof employeeReducer>;
    expect(state.isLoading).toEqual(true);
  });

  it("should add an employee successfully", () => {
    store.dispatch(employeeActions.addEmployeeSuccess());
    const state = store.getState() as ReturnType<typeof employeeReducer>;
    expect(state.isLoading).toEqual(false);
  });

  it("should handle adding an employee failure", () => {
    const errorMessage = "Something went wrong";
    store.dispatch(employeeActions.addEmployeeFiled(errorMessage));
    const state = store.getState() as ReturnType<typeof employeeReducer>;
    expect(state.isLoading).toEqual(false);
    expect(state.error).toEqual(errorMessage);
  });

  it("should start getting all employees", () => {
    store.dispatch(employeeActions.getAllEmployee());
    const state = store.getState() as ReturnType<typeof employeeReducer>;
    expect(state.isLoading).toEqual(true);
  });

  it("should get all employees successfully", () => {
    const employeeData = {
      firstName: "Gathsara",
      email: "gathsara@gmail.com",
      gender: "male",
      lastName: "umesh",
      phoneNumber: "0771234567",
      employeeId: "12",
    };
    store.dispatch(
      employeeActions.getAllEmployeeSuccess({ data: [employeeData] })
    );
    const state = store.getState() as ReturnType<typeof employeeReducer>;
    expect(state.isLoading).toEqual(false);
    expect(state.allEmployee).toEqual([employeeData]);
  });

  it("should handle getting all employees failure", () => {
    const errorMessage = "Something went wrong";
    store.dispatch(employeeActions.getAllEmployeeFiled(errorMessage));
    const state = store.getState() as ReturnType<typeof employeeReducer>;
    expect(state.isLoading).toEqual(false);
    expect(state.error).toEqual(errorMessage);
  });

  it("should start editing an employee", () => {
    store.dispatch(
      employeeActions.editEmployee({ employeeId: "1", data: {} } as any)
    );
    const state = store.getState() as ReturnType<typeof employeeReducer>;
    expect(state.isLoading).toEqual(true);
  });

  it("should edit an employee successfully", () => {
    store.dispatch(employeeActions.editEmployeeSuccess());
    const state = store.getState() as ReturnType<typeof employeeReducer>;
    expect(state.isLoading).toEqual(false);
  });

  it("should handle editing an employee failure", () => {
    const errorMessage = "Something went wrong";
    store.dispatch(employeeActions.editEmployeeFiled(errorMessage));
    const state = store.getState() as ReturnType<typeof employeeReducer>;
    expect(state.isLoading).toEqual(false);
    expect(state.error).toEqual(errorMessage);
  });
  it("should start delete an employee", () => {
    store.dispatch(employeeActions.deleteEmployee({ employeeId: "1" }));
    const state = store.getState() as ReturnType<typeof employeeReducer>;
    expect(state.isLoading).toEqual(true);
  });

  it("should delete an employee successfully", () => {
    store.dispatch(employeeActions.deleteEmployeeSuccess());
    const state = store.getState() as ReturnType<typeof employeeReducer>;
    expect(state.isLoading).toEqual(false);
  });

  it("should handle delete an employee failure", () => {
    const errorMessage = "Something went wrong";
    store.dispatch(employeeActions.deleteEmployeeFiled(errorMessage));
    const state = store.getState() as ReturnType<typeof employeeReducer>;
    expect(state.isLoading).toEqual(false);
    expect(state.error).toEqual(errorMessage);
  });
});
