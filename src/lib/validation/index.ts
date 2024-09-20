import { z } from 'zod';

export const SigninValidation = z.object({
  username: z.string().min(1, { message: 'Username is required.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
});

export const SignupValidation = z.object({
  firstName: z.string().min(1, { message: 'First name is required.' }),
  lastName: z.string().min(1, { message: 'Last name is required.' }),
  username: z.string().min(1, { message: 'Username is required.' }),
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
  confirmPassword: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
  city: z.string().min(1, { message: 'City is required.' }),
  country: z.string().min(1, { message: 'Country is required.' }),
  gender: z.string().min(1, { message: 'Gender is required.' }),
  mobile: z
    .string()
    .min(1, { message: 'Mobile is required.' })
    .min(10, { message: 'Mobile must be at least 10 characters.' }),
});

export const AddressValidation = z.object({
  fullName: z.string().min(1, { message: 'Full name is required.' }),
  addressLine1: z.string().min(1, { message: 'Address line 1 is required.' }),
  addressLine2: z.string(),
  landmark: z.string(),
  mobile: z.string().min(1, { message: 'Mobile is required.' }),
  city: z.string().min(1, { message: 'City is required.' }),
  state: z.string().min(1, { message: 'State is required.' }),
  country: z.string().min(1, { message: 'Country is required.' }),
  postalCode: z.string().min(1, { message: 'Postal code is required.' }),
  default: z.boolean(),
  userId: z.string().min(1, { message: 'User id is required.' }),
});

export const ProductValidation = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  description: z.string().min(1, { message: 'Description is required.' }),
  price: z.string(),
  // price: z.preprocess(
  //   (a) => parseInt(z.string().parse(a), 10),
  //   z.number().min(1, 'Price is required.').gte(0, 'Price should be positive')
  // ),
  image: z.string().min(1, { message: 'Image is required.' }),
  category: z.string().min(1, { message: 'Category is required.' }),
  // rating: z.string({ message: 'rating should be string' }),

  // rating: z.preprocess(
  //   (a) => parseInt(z.string().parse(a), 10),
  //   z.number().min(1, 'Rating is required.').gte(0, 'Rating should be positive')
  // ),
  brand: z.string({ message: 'Brand should be string' }),
  stock: z.string({ message: 'Stock should be string' }),

  // stock: z.preprocess(
  //   (a) => parseInt(z.string().parse(a), 10),
  //   z.number().min(1, 'Stock is required.').gte(0, 'Stock should be positive')
  // ),
  userId: z.string().min(1, { message: 'User id is required.' }),
});
