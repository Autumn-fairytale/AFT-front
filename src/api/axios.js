import axios from 'axios';

const { VITE_API_URL } = import.meta.env;

export const privateInstance = axios.create({
  baseURL: VITE_API_URL,
  // TODO: Delete mock data
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjQ0NTc0YzY2OGEzMzQ2OGYwMDkwOSIsImlhdCI6MTcwMTA3MDg1MX0.xrFoszfqHDv_amb3Ec6kDvjsXztxkr7RpPJczn_x6Ss',
  },
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
