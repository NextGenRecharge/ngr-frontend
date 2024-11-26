import axios from 'axios'
import LocalStorageService from './localstorageservice'

// LocalStorageService
const localStorageService = LocalStorageService.getService()

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    const token = localStorageService.getAccessToken()
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    // config.headers['Content-Type'] = 'application/json';
    return config
  },
  error => {
    Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  function (error) {
    const originalRequest = error.config

    if (
      error.response.status === 401 ||
      error.response.status ===403
    ) {
    //   return Promise.reject(error)
        LocalStorageService.clearTokens()
        window.location.href = '/login'
        return Promise.reject(error)
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshToken = localStorageService.getRefreshToken()
      return axios
        .post('/auth/token', {
          refresh_token: refreshToken
        })
        .then(res => {
          if (res.status === 201) {
            localStorageService.setToken(res.data)
            axios.defaults.headers.common['Authorization'] =
              'Bearer ' + localStorageService.getAccessToken()
            return axios(originalRequest)
          }
        })
    }
    return Promise.reject(error)
  }
)