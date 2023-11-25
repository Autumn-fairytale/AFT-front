import axios from 'axios';

const { VITE_API_URL } = import.meta.env;

export const privateInstance = axios.create({
  baseURL: VITE_API_URL,
});

export const publicInstance = axios.create({
  baseURL: VITE_API_URL,
});

publicInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error?.response?.data || error.message)
);

privateInstance.interceptors.response.use(
  (response) => response,
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error?.response?.data || error.message);
  }
);
