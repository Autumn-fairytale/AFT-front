import { z } from 'zod';

import { passwordPattern } from './patterns';

const signUpSchema = z.object({
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
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .max(50, { message: 'Password should not exceed 50 characters' })
    .regex(/^[^\s]+$/, 'Password can not contain spaces')
    .regex(passwordPattern.full, 'Password must match the pattern'),
});

export default signUpSchema;
