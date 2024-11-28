import axios from 'axios';
import LocalStorageService from './localstorageservice';

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true, // Send cookies with requests (if needed)
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  },
});

const localStorageService = LocalStorageService.getService();

// Request interceptor
API.interceptors.request.use(
  (config) => {
    const token = localStorageService.getAccessToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401) {
      if (originalRequest.url.includes('/auth/token')) {
        // Clear tokens and redirect to login on token refresh failure
        localStorageService.clearTokens();
        window.location.href = '/login';
        return Promise.reject(error);
      }

      if (!originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorageService.getRefreshToken();

        try {
          const res = await API.post('/auth/token', {
            refresh_token: refreshToken,
          });
          if (res.status === 201) {
            localStorageService.setToken(res.data);
            API.defaults.headers['Authorization'] = `Bearer ${localStorageService.getAccessToken()}`;
            return API(originalRequest); // Retry the original request
          }
        } catch (refreshError) {
          localStorageService.clearTokens();
          window.location.href = '/login';
          return Promise.reject(refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default API;
