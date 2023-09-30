import axios, { AxiosResponse } from "axios";

const axiosApiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
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
