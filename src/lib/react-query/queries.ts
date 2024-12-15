import {
  Banner,
  BannerEntity,
  LoginRequest,
  Logo,
  LogoEntity,
  NewAddressRequest,
  NewProductRequest,
  RegisterRequest,
  UpdateAddressRequest,
  UpdateProductRequest,
} from '@/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createUserAccount,
  signInAccount,
  signOutAccount,
} from '../api/auth.api';
import {
  createAddress,
  createBanner,
  createLogo,
  createProduct,
  deleteBanner,
  deleteLogo,
  deleteProduct,
  getBanners,
  getLogos,
  getProducts,
  searchProducts,
  updateAddress,
  updateBanner,
  updateLogo,
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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: NewProductRequest) => createProduct(request),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PRODUCTS],
      });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: UpdateProductRequest) => updateProduct(request),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PRODUCTS],
      });
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PRODUCTS],
      });
    },
  });
};

export const useGetProducts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_PRODUCTS],
    queryFn: () => getProducts(),
  });
};

export const useGetBanners = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_BANNERS],
    queryFn: () => getBanners(),
  });
};

export const useCreateBanner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: Banner) => createBanner(request),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_BANNERS],
      });
    },
  });
};

export const useUpdateBanner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: BannerEntity) => updateBanner(request),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_BANNERS],
      });
    },
  });
};

export const useDeleteBanner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteBanner(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_BANNERS],
      });
    },
  });
};

export const useGetLogos = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_LOGOS],
    queryFn: () => getLogos(),
  });
};

export const useCreateLogo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: Logo) => createLogo(request),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_LOGOS],
      });
    },
  });
};

export const useUpdateLogo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: LogoEntity) => updateLogo(request),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_LOGOS],
      });
    },
  });
};

export const useDeleteLogo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteLogo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_LOGOS],
      });
    },
  });
};

export const useSearchProducts = (searchText: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_PRODUCTS, searchText],
    queryFn: () => searchProducts(searchText),
    enabled: !!searchText,
  });
};
