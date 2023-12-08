import axios from 'axios';

const { VITE_API_URL } = import.meta.env;

export const privateInstance = axios.create({
  baseURL: VITE_API_URL,
});

export const publicInstance = axios.create({
  baseURL: VITE_API_URL,
});

privateInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const data = error?.response?.data;
    if (data) {
      data.statusCode = error?.response?.status;
    }
    return Promise.reject(data || error.message);
  }
);
