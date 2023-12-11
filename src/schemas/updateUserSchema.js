import { z } from 'zod';

import { passwordPattern } from './patterns';

const phoneRegExp = /^(\+38\(0[0-9]{2}\) [0-9]{3} [0-9]{2} [0-9]{2})?$/;
const phoneMaskRegExp = /^(\+38\(0xx\) xxx xx xx)$/;
const addressRegExp = /^[a-zA-Z\s'-]*$/;
const withoutSpacesRegExp = /^[^\s]+$/;

export const updateUserSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: 'First name is required' })
    .min(3, { message: 'First name should be at least 3 characters long' })
    .max(35, { message: 'First name should not exceed 35 characters' }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: 'Last name is required' })
    .min(3, { message: 'Last name should be at least 3 characters long' })
    .max(35, { message: 'Last name should not exceed 35 characters' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email format' }),
  currentPassword: z
    .string()
    .max(50, { message: 'Password should not exceed 50 characters' })
    .regex(withoutSpacesRegExp, 'Password can not contain spaces')
    .regex(
      passwordPattern.full,
      'Current password doesn`t contain required characters'
    )
    .or(z.string().max(0)),
  newPassword: z
    .string()
    .min(1)
    .max(50, { message: 'Password should not exceed 50 characters' })
    .regex(withoutSpacesRegExp, 'Password can not contain spaces')
    .regex(passwordPattern.full, 'Password must match the pattern')
    .or(z.string().max(0)),
  avatar: z.string().nullable(),
  phoneNumber: z
    .string()
    .trim()
    .regex(phoneRegExp, 'Invalid phone number')
    .or(z.string().regex(phoneMaskRegExp)),
  address: z.object({
    country: z
      .string()
      .trim()
      .max(35, { message: 'Symbols limit' })
      .regex(
        addressRegExp,
        'Country includes letters, spaces, hyphens, and apostrophes'
      )
      .optional(),
    city: z
      .string()
      .trim()
      .max(35, { message: 'Symbols limit' })
      .regex(
        addressRegExp,
        'City includes letters, spaces, hyphens, and apostrophes'
      )
      .optional(),

    street: z.string().trim().max(35, { message: 'Symbols limit' }),
    houseNumber: z
      .string()
      .trim()
      .max(5, { message: 'Symbols limit' })
      .optional(),
    apartment: z
      .string()
      .max(5, { message: 'Symbols limit' })
      .nullable()
      .optional(),
    coordinate: z
      .object({
        lat: z.number().min(-90).max(90),
        lng: z.number().min(-180).max(180),
      })
      .nullable()
      .optional(),
  }),
});
