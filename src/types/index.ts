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
  token: string;
  user: User;
};

export type RegisterResponse = {
  user: User;
};

export class User {
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  roles?: Role[];
}

export enum Role {
  admin = "ADMIN",
  user = "USER",
  guest = "GUEST",
}

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  brand: string;
};

export type Category = {
  name: string;
  value: string;
  description: string;
};

export type Cart = {
  productId: string;
  quantity: number;
};
