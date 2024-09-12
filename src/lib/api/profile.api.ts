import {
  Address,
  ApiResponse,
  NewAddressRequest,
  NewProductRequest,
  Product,
  UpdateAddressRequest,
  UpdateProductRequest,
} from '@/types';
import axiosInstance from './axios/axios-instance';

export const createAddress = async (request: NewAddressRequest) => {
  try {
    const response = await axiosInstance.post<ApiResponse<Address>>(
      '/api/address',
      request
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateAddress = async (request: UpdateAddressRequest) => {
  try {
    const response = await axiosInstance.put<ApiResponse<Address>>(
      `/api/address/${request.id}`,
      request
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (request: NewProductRequest) => {
  try {
    const response = await axiosInstance.post<ApiResponse<Product>>(
      '/api/product',
      request
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (request: UpdateProductRequest) => {
  try {
    const response = await axiosInstance.put<ApiResponse<Product>>(
      `/api/product/${request.id}`,
      request
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
