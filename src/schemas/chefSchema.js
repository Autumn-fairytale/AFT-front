import { z } from 'zod';

const phoneRegExp = /^\+38\(0[0-9]{2}\) [0-9]{3} [0-9]{2} [0-9]{2}$/;
const addressRegExp = /^[a-zA-Z\s'-]+$/;

// const MAX_FILE_SIZE = 500000;
// const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];
export const chefSchema = z.object({
  // avatar: z
  //   .any()
  //   .refine((files) => files?.length == 1, 'Image is required.')
  //   .refine(
  //     (files) => files?.[0]?.size <= MAX_FILE_SIZE,
  //     `Max file size is 5MB.`
  //   )
  //   .refine(
  //     (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  //     '.jpg, .jpeg, .png files are accepted.'
  //   ),
  phoneNumber: z.string().trim().regex(phoneRegExp, 'Invalid number format'),
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
    houseNumber: z.string().trim().min(1).max(10),
    apartment: z.string().optional(),
    coordinate: z
      .object({
        lat: z.number().min(-90).max(90),
        lng: z.number().min(-180).max(180),
      })
      .nullable()
      .optional(),
  }),
  accountStatus: z.enum([
    'pending',
    'active',
    'verified',
    'rejected',
    'blocked',
  ]),
  // certificate: z
  //   .any()
  //   .refine((files) => files?.length == 1, 'Image is required.')
  //   .refine(
  //     (files) => files?.[0]?.size <= MAX_FILE_SIZE,
  //     `Max file size is 5MB.`
  //   )
  //   .refine(
  //     (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  //     '.jpg, .jpeg, .png files are accepted.'
  //   ),
});
