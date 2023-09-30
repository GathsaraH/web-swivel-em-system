import axios, { AxiosResponse } from "axios";
require('dotenv').config();

export enum ApiEndPointsUrl {
  GET_ALL_EMPLOYEE = "/employee/all",
  ADD_EMPLOYEE = "/employee/add",
  EDIT_EMPLOYEE = "/employee/edit/{employeeId}",
  DELETE_EMPLOYEE = "/employee/delete/{employeeId}",
}

const axiosApiInstance = axios.create({
  baseURL:  process.env[`NEXT_PUBLIC_BASE_URL`],
  headers: {
    "Content-Type": "application/json",
  },
});

export async function authorizedPostRequest(
  url: string,
  data: any
): Promise<AxiosResponse> {
  return axiosApiInstance
    .post(url, data)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

export async function authorizedGetRequest(
  url: string
): Promise<AxiosResponse> {
  return axiosApiInstance
    .get(url)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

export async function authorizedPutRequest(
  url: string,
  data: any
): Promise<AxiosResponse> {
  return axiosApiInstance
    .put(url, data)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}
export async function authorizedDeleteRequest(
  url: string
): Promise<AxiosResponse> {
  return axiosApiInstance
    .delete(url)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}
