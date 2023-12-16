import axios from 'axios';

import { refresh_token_401_error, tokens_failed_401_error } from '@/constants';
import { signOut } from '@/redux/auth/operations';
import { store } from '@/redux/store';

const { VITE_API_URL } = import.meta.env;

export const privateInstance = axios.create({
  baseURL: VITE_API_URL,
  withCredentials: true,
});

export const publicInstance = axios.create({
  baseURL: VITE_API_URL,
  withCredentials: true,
});

publicInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const data = error?.response?.data;
    if (data) {
      data.statusCode = error?.response?.status;
    }
    return Promise.reject(data || error.message);
  }
);

// privateInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error?.config;

//     const { isAuth } = store.getState().auth;

//     if (error?.response?.data?.message === tokens_failed_401_error) {
//       isAuth && store.dispatch(signOut());
//     }

//     if (error?.response?.data?.message === refresh_token_401_error) {
//       try {
//         await privateInstance.post('/users/refresh');

//         return privateInstance(originalRequest);
//       } catch (error) {
//         store.dispatch(signOut());
//       }
//     }

//     const data = error?.response?.data;

//     if (data) {
//       data.statusCode = error?.response?.status;
//     }
//     return Promise.reject(data || error.message);
//   }
// );

let refreshPromise = null;

// Function to refresh the token
const refreshAccessToken = async () => {
  return await privateInstance.post('/users/refresh');
};

// Add a response interceptor
privateInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error?.config;
    const { isAuth } = store.getState().auth;

    if (error?.response?.data?.message === tokens_failed_401_error) {
      if (isAuth) {
        store.dispatch(signOut());
      }
    }

    if (error?.response?.data?.message === refresh_token_401_error) {
      if (!refreshPromise) {
        refreshPromise = refreshAccessToken().finally(() => {
          refreshPromise = null;
        });
      }

      return refreshPromise
        .then(() => privateInstance(originalRequest))
        .catch(() => store.dispatch(signOut()));
    }

    const data = error?.response?.data;
    if (data) {
      data.statusCode = error?.response?.status;
    }
    return Promise.reject(data || error.message);
  }
);
