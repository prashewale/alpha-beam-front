export type ApiResponse<T> = {
  data: T | undefined | null;
  errors: string[];
  status: Status;
};

export enum Status {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export type LoginRequest = {
  username: string;
  password: string;
  rememberMe: boolean;
};

export type RegisterRequest = {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  gender: string;
  mobile: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export type RegisterResponse = {
  user: User;
};

export type User = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: Role[];
};

export enum Role {
  admin = 'ADMIN',
  user = 'USER',
  guest = 'GUEST',
}

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  rating: number;
  brand: string;
  stock: number;
  url?: string;
  shortDescription?: string;
};

export type NewProductRequest = {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  brand: string;
  stock: number;
};

export type UpdateProductRequest = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  brand: string;
  stock: number;
};

export type Category = {
  name: string;
  value: string;
  description: string;
  iconImageUrl?: string;
  backgroundImage?: string;
};

export type Cart = {
  productId: string;
  quantity: number;
};

// export type Cart = {
//   product: Product;
//   quantity: number;
// };

export type BreadCrumbItem = {
  title: string;
  url: string;
  icon?: string;
};

export type Address = {
  id: number;
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  landmark?: string;
  mobile: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  default: boolean;
  userId: string;
};

export type NewAddressRequest = {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  landmark?: string;
  mobile: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  default: boolean;
  userId: string;
};

export type UpdateAddressRequest = {
  id: number;
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  landmark?: string;
  mobile: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  default: boolean;
  userId: string;
};

export type NavMenuItem = {
  imgURL: string;
  route: string;
  label: string;
};

export type OfficeLocation = {
  officeName: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  icon: string;
  googleMapLocation: string;
};
