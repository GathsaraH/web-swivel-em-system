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
  RequestGetAllEmployeeType,
  SearchTypeEnum,
} from "./type";
import {
  decodeParamAxiosRequest,
  decodeQueryAxiosRequest,
} from "@/util/decodeAxiosRequest";
import RootLayout from "@/app/layout";
import { RootRoutes } from "@/util/routes";

/**
 * @async_function
 */
async function callGetAllEmployee(searchTerm: RequestGetAllEmployeeType) {
  const url = decodeQueryAxiosRequest({
    url: ApiEndPointsUrl.GET_ALL_EMPLOYEE,
    params: {
      searchTerm: searchTerm.searchTerm,
    },
  });
  return await authorizedGetRequest(url);
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
  const url = decodeParamAxiosRequest(ApiEndPointsUrl.EDIT_EMPLOYEE, {
    employeeId,
  });
  return await authorizedPutRequest(url, data);
}
async function callDeleteEmployee(employeeId: string) {
  const url = decodeParamAxiosRequest(ApiEndPointsUrl.DELETE_EMPLOYEE, {
    employeeId,
  });
  return await authorizedDeleteRequest(url);
}
/**
 * @saga_function
 */
export function* watchGetAllEmployee({
  payload,
}: PayloadAction<RequestGetAllEmployeeType>): Generator<any, void, any> {
  try {
    const response = yield call(callGetAllEmployee, payload);
    if (response.status === 200) {
      yield put(employeeActions.getAllEmployeeSuccess({ data: response.data }));
    }
  } catch (error: any) {
    yield put(employeeActions.getAllEmployeeFiled(error.message));
    errorNotification("Something went wrong! Try again later");
  }
}

export function* watchAddEmployee({
  payload,
}: PayloadAction<AddEmployeeType>): Generator<any, void, any> {
  try {
    const response = yield call(callAddEmployee, payload);
    if (response.status === 201) {
      successNotification("Employee added successfully!");
      yield put(
        employeeActions.getAllEmployee({ searchTerm: SearchTypeEnum.NO_QUERY })
      );
      yield put(employeeActions.addEmployeeSuccess());
      payload.router;
    }
  } catch (error: any) {
    yield put(employeeActions.addEmployeeFiled(error.message));
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
    if (response.status === 200) {
      successNotification("Employee edit successfully!");
      yield put(
        employeeActions.getAllEmployee({ searchTerm: SearchTypeEnum.NO_QUERY })
      );
      yield put(employeeActions.addEmployeeSuccess());
      payload.router;
    }
  } catch (error: any) {
    yield put(employeeActions.editEmployeeFiled(error.message));
    errorNotification("Something went wrong! Try again later");
  }
}

export function* watchDeleteEmployee({
  payload,
}: PayloadAction<{ employeeId: string }>): Generator<any, void, any> {
  try {
    const response = yield call(callDeleteEmployee, payload.employeeId);
    if (response.status === 200) {
      yield put(
        employeeActions.getAllEmployee({ searchTerm: SearchTypeEnum.NO_QUERY })
      );
      yield put(
        employeeActions.handleDeleteModel({
          isModelOpen: false,
          employeeId: "",
        })
      );
      successNotification("Employee deleted successfully!");
      yield put(employeeActions.deleteEmployeeSuccess());
    
    }
  } catch (error: any) {
    yield put(employeeActions.deleteEmployeeFiled(error.message));
    errorNotification("Something went wrong! Try again later");
  }
}

export function* watchEmployeeSaga() {
  yield takeLatest(employeeActions.getAllEmployee, watchGetAllEmployee);
  yield takeLatest(employeeActions.addEmployee, watchAddEmployee);
  yield takeLatest(employeeActions.editEmployee, watchEditEmployee);
  yield takeLatest(employeeActions.deleteEmployee, watchDeleteEmployee);
}
const EmployeeSaga = watchEmployeeSaga;
export default EmployeeSaga;
