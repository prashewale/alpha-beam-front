import {
  ApiResponse,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '@/types';
import axiosInstance from './axios/axios-instance';

export async function getCurrentUser() {
  try {
    const response = await axiosInstance.get('/me');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const signInAccount = async (request: LoginRequest) => {
  try {
    const apiResonse = await axiosInstance.post<ApiResponse<LoginResponse>>(
      '/api/login',
      request
    );

    return apiResonse.data;
  } catch (error) {
    console.log(error);
  }
};

export const signOutAccount = async () => {
  try {
    const response = await axiosInstance.post('/logout');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createUserAccount = async (request: RegisterRequest) => {
  try {
    const response = await axiosInstance.post<ApiResponse<RegisterResponse>>(
      '/api/register',
      request
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
