import { z } from 'zod';

import { passwordPattern } from './patterns';

const signUpSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First name is required' })
    .min(3, { message: 'First name should be at least 3 characters long' }),
  lastName: z
    .string()
    .min(1, { message: 'Last name is required' })
    .min(3, { message: 'Last name should be at least 3 characters long' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email format' }),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .regex(passwordPattern.full, 'Password must match the pattern'),
});

export default signUpSchema;
