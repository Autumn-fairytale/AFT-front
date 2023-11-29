import * as zod from 'zod';

export const chefSchema = zod.object({
  name: zod.string().trim().min(1, { message: 'Dish name required' }),

  price: zod
    .number()
    .positive('Price must be greater than zero')
    .or(zod.string().min(1, 'Price is required')),

  cuisine: zod.string().min(1, 'Cuisine is required'),

  category: zod.string().min(1, 'Category is required'),

  description: zod
    .string()
    .trim()
    .min(10, 'Min 10 symbols')
    .max(400, 'Max 400 symbols'),

  ingredients: zod
    .array(zod.string().min(1, 'Ingredient cannot be empty'))
    .min(1, 'At least one ingredient is required'),

  isVegan: zod.boolean(),

  // image: zod.string().url('Must be a valid URL'),

  cookTimeInMinutes: zod
    .number()
    .positive('Cooking time must be positive')
    .or(zod.string().min(1, 'Cooking time is required')),

  nutrition: zod
    .object({
      calories: zod
        .union([zod.number().nonnegative(), zod.string().length(0)])
        .optional()
        .nullable(),
      protein: zod
        .union([zod.number().nonnegative(), zod.string().length(0)])
        .optional()
        .nullable(),
      fats: zod
        .union([zod.number().nonnegative(), zod.string().length(0)])
        .optional()
        .nullable(),
      carbohydrates: zod
        .union([zod.number().nonnegative(), zod.string().length(0)])
        .optional()
        .nullable(),
    })
    .optional(),

  spiceLevel: zod.number().min(0).max(3),
  weight: zod
    .number()
    .min(0, 'Weight must be non-negative')
    .max(100000, 'Really more than 100kg ? ')
    .or(zod.string().min(0.01, 'Weight required')),

  isAvailable: zod.boolean(),
});
