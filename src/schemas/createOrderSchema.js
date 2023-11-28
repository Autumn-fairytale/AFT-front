import { z } from 'zod';

const phoneRegExp = /^\+38\(0[0-9]{2}\) [0-9]{3} [0-9]{2} [0-9]{2}$/;
const addressRegExp = /^[a-zA-Z\s'-]+$/;

export const createOrderSchema = z.object({
  phoneNumber: z.string().trim().regex(phoneRegExp),
  userName: z.string().trim().min(3),
  address: z.object({
    country: z
      .string()
      .trim()
      .min(1)
      .max(255)
      .regex(
        addressRegExp,
        'Country include letters, spaces, hyphens, and apostrophes'
      ),
    city: z
      .string()
      .trim()
      .min(1)
      .max(255)
      .regex(
        addressRegExp,
        'City include letters, spaces, hyphens, and apostrophes'
      ),
    street: z.string().trim().min(1).max(255),
  }),
  additionalInfo: z.string().trim().min(0).max(400),
  coordinate: z
    .object({
      lat: z.number().min(-90).max(90),
      lng: z.number().min(-180).max(180),
    })
    .nullable()
    .optional(),
});
