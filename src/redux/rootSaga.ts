import { all, fork } from "redux-saga/effects";
import EmployeeSaga from "./employee/saga";
export default function* rootSaga() {
  yield all([fork(EmployeeSaga)]);
}
