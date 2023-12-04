import { z } from 'zod';

const singInSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email format' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

export default singInSchema;
