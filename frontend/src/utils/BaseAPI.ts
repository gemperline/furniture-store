/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  CanceledError,
} from 'axios';
import { store } from 'app/ApplicationRoot/ApplicationRoot';
// import { globalActions } from 'app/ApplicationRoot/Global.redux';
import React from 'react';

console.log('API URL:', globalThis?.app?.env?.REACT_APP_API_URL);

const apiConfig: AxiosRequestConfig = {
  baseURL: globalThis?.app?.env?.REACT_APP_API_URL || 'http://localhost:3000',
  headers: {
    Accept: 'Application/json',
    'Content-Type': 'Application/json',
  },
};

export const baseAxiosInstance = axios.create(apiConfig);

const handleGlobalError = (status) => {
  //   const { dispatch } = store;
  //   switch (status) {
  //     case 401:
  //       dispatch(
  //         globalActions.setSnackBar({
  //           message: 'Missing or invalid authentication token. Please refresh your page to continue',
  //           severity: 'error',
  //         }),
  //       );
  //       break;
  //     default:
  //       break;
  //   }
};

// export const setAxiosEmployeeID = employeeID => {
//   baseAxiosInstance.defaults.headers.common.employeeID = employeeID;
// };

export default baseAxiosInstance;

// const store = configureAppStore();
export function api() {
  // const user = store.getState()?.user;
  // const token = user?.auth?.access_token;
  return axios.create({
    baseURL: `${globalThis?.app?.env?.REACT_APP_API_URL}`,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${123}`,
      Prefer: 'return=representation',
    },
  });
}

export const useAxiosLoader = () => {
  const [counter, setCounter] = React.useState(0);
  //   const isAuthenticated = useIsAuthenticated();

  return [counter > 0];
};
