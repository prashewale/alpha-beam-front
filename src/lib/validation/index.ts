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

// export const ProductValidation = z.object({
//   name: z.string().min(1, { message: 'Name is required.' }),
//   description: z.string().min(1, { message: 'Description is required.' }),
//   // price: z.preprocess(
//   //   (a) => parseInt(z.string().parse(a), 10),
//   //   z.number().min(1, 'Price is required.').gte(0, 'Price should be positive')
//   // ),
//   rating: z.number().min(0).max(5, 'Rating must be between 0 and 5'), // Ensure rating is between 0 and 5
//   // price: z.number().min(0, 'Price must be greater than 0'), // Ensure price is greater than 0

//   // price: z
//   //   .string()
//   //   .regex(
//   //     /^\d+(\.\d{1,2})?$/,
//   //     'Please enter a valid price (e.g., 10 or 10.99)'
//   //   )
//   //   .transform((value) => parseFloat(value)), // Transform to number for backend processing

//   // price: z.string().min(1, { message: 'Price is required.' }),
//   // images: z.any().refine((images) => images && images.length > 0, {
//   //   message: 'At least one image is required.',
//   // }),
//   // images: z.custom<File[]>(),
//   category: z.string().min(1, { message: 'Category is required.' }),

//   // rating: z.preprocess(
//   //   (a) => parseInt(z.string().parse(a), 10),
//   //   z.number().min(1, 'Rating is required.').gte(0, 'Rating should be positive')
//   // ),
//   brand: z.string({ message: 'Brand should be string' }),

//   // stock: z.preprocess(
//   //   (a) => parseInt(z.string().parse(a), 10),
//   //   z.number().min(1, 'Stock is required.').gte(0, 'Stock should be positive')
//   // ),
//   // userId: z.string().min(1, { message: 'User id is required.' }),
// });

export const ProductValidation = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  description: z.string().min(1, { message: 'Description is required.' }),
  rating: z.number().min(0).max(5, 'Rating must be between 0 and 5'), // Ensure rating is between 0 and 5
  price: z.coerce.number(),
  stock: z.coerce.number(),
  // price: z
  //   .string()
  //   .regex(
  //     /^\d+(\.\d{1,2})?$/,
  //     'Please enter a valid price (e.g., 10 or 10.99)'
  //   )
  //   .transform((value) => parseFloat(value)), // Transform to number for backend processing
  // stock: z
  //   .string()
  //   .regex(/^\d+$/, 'Please enter a valid stock (e.g., 10 or 25)')
  //   .transform((value) => parseFloat(value)), // Transform to number for backend processing

  images: z
    .any()
    .refine((images) => images && images.length > 0, {
      message: 'At least one image is required.',
    })
    .transform((images) => images as string[]),

  // images: z.custom<File[]>(),
  category: z.string().min(1, { message: 'Category is required.' }),
  brand: z.string({ message: 'Brand should be string' }),
  // stock: z.preprocess(
  //   (a) => parseInt(z.string().parse(a), 10),
  //   z.number().min(1, 'Stock is required.').gte(0, 'Stock should be positive')
  // ),
  // userId: z.string().min(1, { message: 'User id is required.' }),
});
