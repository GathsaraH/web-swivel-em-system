import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { employeeActions } from "./slice";
import {
  ApiEndPointsUrl,
  authorizedDeleteRequest,
  authorizedGetRequest,
  authorizedPostRequest,
  authorizedPutRequest,
} from "@/util/apitService";
import { errorNotification, successNotification } from "@/util/notification";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  AddEmployeeType,
  EditEmployeeDataType,
  EditEmployeeType,
} from "./type";
import { decodeAxiosRequest } from "@/util/decodeAxiosRequest";
import RootLayout from "@/app/layout";
import { RootRoutes } from "@/util/routes";

/**
 * @async_function
 */
async function callGetAllEmployee() {
  return await authorizedGetRequest(ApiEndPointsUrl.GET_ALL_EMPLOYEE);
}
async function callAddEmployee(data: AddEmployeeType) {
  //Delete Router param
  delete data.router;
  return await authorizedPostRequest(ApiEndPointsUrl.ADD_EMPLOYEE, data);
}
async function callEditEmployee(
  employeeId: string,
  data: EditEmployeeDataType
) {
  const url = decodeAxiosRequest(ApiEndPointsUrl.EDIT_EMPLOYEE, { employeeId });
  return await authorizedPutRequest(url, data);
}
async function callDeleteEmployee(employeeId: string) {
  const url = decodeAxiosRequest(ApiEndPointsUrl.DELETE_EMPLOYEE, {
    employeeId,
  });
  return await authorizedDeleteRequest(url);
}
/**
 * @saga_function
 */
export function* watchGetAllEmployee(): Generator<any, void, any> {
  try {
    const response = yield call(callGetAllEmployee);
    if (response.status === 200) {
      yield put(employeeActions.getAllEmployeeSuccess({ data: response.data }));
    }
  } catch (error) {
    errorNotification("Something went wrong! Try again later");
  }
}

export function* watchAddEmployee({
  payload,
}: PayloadAction<AddEmployeeType>): Generator<any, void, any> {
  try {
    console.log(payload);
    const response = yield call(callAddEmployee, payload);
    if (response.status === 201) {
      yield put(employeeActions.getAllEmployee());
      successNotification("Employee added successfully!");
      yield put(employeeActions.addEmployeeSuccess());
      payload.router;
    }
  } catch (error) {
    errorNotification("Something went wrong! Try again later");
  }
}

export function* watchEditEmployee({
  payload,
}: PayloadAction<EditEmployeeType>): Generator<any, void, any> {
  try {
    const response = yield call(
      callEditEmployee,
      payload.employeeId,
      payload.data
    );
    if (response.status === 201) {
      yield put(employeeActions.addEmployeeSuccess());
      successNotification("Employee edit successfully!");
    }
  } catch (error) {
    errorNotification("Something went wrong! Try again later");
  }
}

export function* watchDeleteEmployee({
  payload,
}: PayloadAction<{ employeeId: string }>): Generator<any, void, any> {
  try {
    const response = yield call(callDeleteEmployee, payload.employeeId);
    if (response.status === 201) {
      yield put(employeeActions.addEmployeeSuccess());
      successNotification("Employee deleted successfully!");
      yield put(
        employeeActions.handleDeleteModel({
          isModelOpen: false,
          employeeId: "",
        })
      );
    }
  } catch (error) {
    errorNotification("Something went wrong! Try again later");
  }
}

export function* watchEmployeeSaga() {
  yield takeLatest(employeeActions.getAllEmployee, watchGetAllEmployee);
  yield takeEvery(employeeActions.addEmployee, watchAddEmployee);
  yield takeEvery(employeeActions.editEmployee, watchEditEmployee);
  yield takeEvery(employeeActions.deleteEmployee, watchDeleteEmployee);
}
const EmployeeSaga = watchEmployeeSaga;
export default EmployeeSaga;
