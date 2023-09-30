import { AxiosRequestConfig } from "axios";
export function decodeParamAxiosRequest(
  input: string,
  placeHolder: any
): string {
  let output: string = input;
  let placeHolderArray: string[] = Object.keys(placeHolder);
  placeHolderArray.forEach((element: string) => {
    output = output.replace(`{${element}}`, placeHolder[element]);
  });
  return output;
}
export function decodeQueryAxiosRequest(
  requestConfig: AxiosRequestConfig
): string {
  const { url, params } = requestConfig;
  let queryString = "";

  if (params) {
    const queryParams = new URLSearchParams(params);
    queryString = queryParams.toString();
  }

  return `${url}?${queryString}`;
}
