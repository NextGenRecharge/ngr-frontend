class LocalStorageService {
    static instance = null;
  
    static getService() {
      if (!LocalStorageService.instance) {
        LocalStorageService.instance = new LocalStorageService();
      }
      return LocalStorageService.instance;
    }
  
    getAccessToken() {
      return localStorage.getItem('access_token');
    }
  
    getRefreshToken() {
      return localStorage.getItem('refresh_token');
    }
  
    setToken(tokenData) {
      const { access_token, refresh_token } = tokenData;
      this.setAccessToken(access_token);
      this.setRefreshToken(refresh_token);
    }
  
    setAccessToken(accessToken) {
      localStorage.setItem('access_token', accessToken);
    }
  
    setRefreshToken(refreshToken) {
      localStorage.setItem('refresh_token', refreshToken);
    }
  
    clearTokens() {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    }
  }
  
  export default LocalStorageService;
  