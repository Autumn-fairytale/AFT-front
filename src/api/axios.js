import axios from 'axios';

import { refresh_token_401_error } from '@/constants/tokens';

const { VITE_API_URL } = import.meta.env;

export const privateInstance = axios.create({
  baseURL: VITE_API_URL,
  withCredentials: true,
});

export const publicInstance = axios.create({
  baseURL: VITE_API_URL,
  withCredentials: true,
});

// privateInstance.interceptors.request.use(
//   (config) => {
//     const accessToken = getToken(tokenType.ACCESS);

//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

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
    if (
      error?.response?.data?.message === refresh_token_401_error
      // && !originalRequest.headers._retry
    ) {
      // originalRequest.headers._retry = true;

      try {
        // const response =
        await privateInstance.post('/users/refresh');

        // const { accessToken: newAccessToken } = response.data;

        // // Cookies.set(accessCookieName, newAccessToken);

        return privateInstance(originalRequest);
      } catch (error) {
        await privateInstance.post('/users/logout');
        window.location.href = '/sign-in';
      }
    }

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
//     console.log(error);
//     if (error.message === tokens_failed_401_error) {
//       await privateInstance.post('/users/logout');
//     }

//     const data = error?.response?.data;

//     if (data) {
//       data.statusCode = error?.response?.status;
//     }
//     return Promise.reject(data || error.message);
//   }
// );

// privateInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error?.config;

//     if (
//       error?.response?.message === refresh_token_401_error &&
//       !originalRequest.headers._retry
//     ) {
//       originalRequest.headers._retry = true;

//       try {
//         const refreshToken = getToken(tokenType.REFRESH);

//         const response = await privateInstance.post('/users/refresh', {
//           refreshToken,
//         });
//         const { accessToken: newAccessToken } = response.data;

//         setToken(tokenType.ACCESS, newAccessToken);

//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return privateInstance(originalRequest);
//       } catch (error) {
//         console.log('Not authorized after refresh');
//       }
//     }

//     const data = error?.response?.data;

//     if (data) {
//       data.statusCode = error?.response?.status;
//     }
//     return Promise.reject(data || error.message);
//   }
// );

// privateInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.message === 'Refresh failed') {
//       navigateToSignIn();
//     }

//     return Promise.reject(error);
//   }
// );

// privateInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error?.config;

//     if (error?.response?.status === 401 && !originalRequest.headers._retry) {
//       originalRequest.headers._retry = true;

//       try {
//         const refreshToken = getToken(tokenType.REFRESH);

//         const response = await privateInstance.post('/users/refresh', {
//           refreshToken,
//         });
//         const { accessToken: newAccessToken } = response.data;

//         setToken(tokenType.ACCESS, newAccessToken);

//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return privateInstance(originalRequest);
//       } catch (error) {
//         console.log('Not authorized after refresh');
//       }
//     }

//     const data = error?.response?.data;

//     if (data) {
//       data.statusCode = error?.response?.status;
//     }
//     return Promise.reject(data || error.message);
//   }
// );

// let isRefreshing = false;
// let refreshQueue = []; //  is array to store the requests that are waiting for the token to be refreshed

// // function that adds a request to the queue, and the processQueue
// const addToQueue = (config) => {
//   return new Promise((resolve, reject) => {
//     refreshQueue.push({ resolve, reject, config });
//   });
// };

// // function replays the queued requests with the new access token once it's refreshed
// const processQueue = (newAccessToken) => {
//   refreshQueue.forEach((queuedRequest) => {
//     queuedRequest.config.headers.Authorization = `Bearer ${newAccessToken}`;
//     privateInstance(queuedRequest.config)
//       .then(queuedRequest.resolve)
//       .catch(queuedRequest.reject);
//   });
//   refreshQueue = [];
// };

// privateInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error?.config;

//     if (error?.response?.status === 401) {
//       if (!isRefreshing) {
//         isRefreshing = true;

//         try {
//           const refreshToken = getToken(tokenType.REFRESH);

//           const response = await privateInstance.post('/users/refresh', {
//             refreshToken,
//           });

//           const { accessToken: newAccessToken } = response.data;

//           setToken(tokenType.ACCESS, newAccessToken);

//           // originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//           processQueue(newAccessToken);
//         } catch (error) {
//           console.log('Refresh error');
//         } finally {
//           isRefreshing = false;
//         }
//       }

//       return addToQueue(originalRequest);
//     }

//     const data = error?.response?.data;

//     if (data) {
//       data.statusCode = error?.response?.status;
//     }
//     return Promise.reject(data || error.message);
//   }
// );
