import {
  LoginRequest,
  NewAddressRequest,
  NewProductRequest,
  RegisterRequest,
  UpdateAddressRequest,
  UpdateProductRequest,
} from '@/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createUserAccount,
  signInAccount,
  signOutAccount,
} from '../api/auth.api';
import {
  createAddress,
  createProduct,
  getProducts,
  updateAddress,
  updateProduct,
} from '../api/profile.api';
import { QUERY_KEYS } from './query-keys';

// ============================================================
// AUTH QUERIES
// ============================================================

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (request: LoginRequest) => signInAccount(request),
  });
};

export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: signOutAccount,
  });
};

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (request: RegisterRequest) => createUserAccount(request),
  });
};

export const useCreateAddress = () => {
  return useMutation({
    mutationFn: (request: NewAddressRequest) => createAddress(request),
  });
};

export const useUpdateAddress = () => {
  return useMutation({
    mutationFn: (request: UpdateAddressRequest) => updateAddress(request),
  });
};

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: (request: NewProductRequest) => createProduct(request),
  });
};

export const useUpdateProduct = () => {
  return useMutation({
    mutationFn: (request: UpdateProductRequest) => updateProduct(request),
  });
};

export const useGetProducts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_PRODUCTS],
    queryFn: () => getProducts(),
  });
};
