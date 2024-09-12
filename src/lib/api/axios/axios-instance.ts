import { configureLoginCookies, parseCookie } from '@/lib/utilities';
import axios from 'axios';

import axiosRetry from 'axios-retry';
import env from '../../config';

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  timeout: 20000,
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
  },
  baseURL: env.VITE_SERVER_URL,
  //   withCredentials: true,
});

axiosRetry(axiosInstance, {
  retries: 5,
  retryDelay: (retryCount) => {
    return retryCount * 200;
  },
  // retryCondition: (error) => {
  //   return error.response?.status === 429;
  // },
});

let _cookies: string[] = [];
// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Set the cookie in the header
    config.headers['Cookie'] = _cookies.join(';');

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  async (response) => {
    const cookieHeader = response.headers['set-cookie'];
    if (cookieHeader) {
      _cookies = [];
      cookieHeader.forEach((c) => {
        const cookie = parseCookie(c);
        _cookies = [..._cookies, ...configureLoginCookies(cookie)];
      });
    }

    // Delay for 200ms to simulate API call
    await new Promise((resolve) => setTimeout(resolve, 200));

    return response;
  },
  (error) => {
    if (error.response) {
      console.error('Backend error:', error.response.data);
    } else if (error.request) {
      console.error('No response from server:', error.request);
    } else {
      console.error('Request error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
