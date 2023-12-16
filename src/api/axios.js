import axios from 'axios';

import {
  refresh_token_401_error,
  // tokenType,
  tokens_failed_401_error,
} from '@/constants/tokens';
import { signOut } from '@/redux/auth/operations';
// import Cookies from 'js-cookie';
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

privateInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error?.config;
    // const isRefreshExist = Cookies.get(tokenType.ACCESS);

    if (
      error?.response?.data?.message === tokens_failed_401_error
      // && !isRefreshExist
    ) {
      store.dispatch(signOut());
    }

    if (error?.response?.data?.message === refresh_token_401_error) {
      try {
        await privateInstance.post('/users/refresh');

        return privateInstance(originalRequest);
      } catch (error) {
        store.dispatch(signOut());
      }
    }

    const data = error?.response?.data;

    if (data) {
      data.statusCode = error?.response?.status;
    }
    return Promise.reject(data || error.message);
  }
);
