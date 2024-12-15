import {
  Address,
  ApiResponse,
  Banner,
  BannerEntity,
  Logo,
  LogoEntity,
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
    throw error;
  }
};

export const updateAddress = async (request: UpdateAddressRequest) => {
  try {
    const response = await axiosInstance.put<ApiResponse<Address>>(
      `/api/address/${request._id}`,
      request
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
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
    throw error;
  }
};

export const updateProduct = async (request: UpdateProductRequest) => {
  try {
    const response = await axiosInstance.put<ApiResponse<Product>>(
      `/api/product/${request._id}`,
      request
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const response = await axiosInstance.delete<ApiResponse<Product>>(
      `/api/product/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response =
      await axiosInstance.get<ApiResponse<Product[]>>(`/api/product`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createBanner = async (request: Banner) => {
  try {
    const response = await axiosInstance.post<ApiResponse<BannerEntity>>(
      '/api/banner',
      request
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateBanner = async (request: BannerEntity) => {
  try {
    const response = await axiosInstance.put<ApiResponse<BannerEntity>>(
      `/api/banner/${request._id}`,
      request
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteBanner = async (id: string) => {
  try {
    const response = await axiosInstance.delete<ApiResponse<BannerEntity>>(
      `/api/banner/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getBanners = async () => {
  try {
    const response =
      await axiosInstance.get<ApiResponse<BannerEntity[]>>(`/api/banner`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createLogo = async (request: Logo) => {
  try {
    const response = await axiosInstance.post<ApiResponse<LogoEntity>>(
      '/api/logo',
      request
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateLogo = async (request: LogoEntity) => {
  try {
    const response = await axiosInstance.put<ApiResponse<LogoEntity>>(
      `/api/logo/${request._id}`,
      request
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteLogo = async (id: string) => {
  try {
    const response = await axiosInstance.delete<ApiResponse<LogoEntity>>(
      `/api/logo/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getLogos = async () => {
  try {
    const response =
      await axiosInstance.get<ApiResponse<LogoEntity[]>>(`/api/logo`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const searchProducts = async (searchText: string) => {
  try {
    const response = await axiosInstance.get<ApiResponse<Product[]>>(
      `/api/product?name=${searchText}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
