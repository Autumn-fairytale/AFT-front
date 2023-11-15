import * as zod from 'zod';

export const dishSchema = zod.object({
  name: zod.string().trim().min(1, { message: 'Dish name required' }),

  price: zod
    .number()
    .positive('Price must be greater than zero')
    .or(zod.string().min(1, 'Price is required')),

  cuisine: zod.string().min(1, 'Cuisine is required'),

  category: zod.string().min(1, 'Category is required'),

  description: zod.string().min(10, 'Min 10 symbols'),

  ingredients: zod
    .array(zod.string().min(1, 'Ingredient cannot be empty'))
    .min(1, 'At least one ingredient is required'),

  isVegan: zod.boolean(),

  // image: zod.string().url('Must be a valid URL'),

  cookTime: zod
    .number()
    .positive('Cooking time must be positive')
    .or(zod.string().min(1, 'Cooking time is required')),

  nutrition: zod
    .object({
      calories: zod
        .number()
        .min(0)
        .or(zod.string().min(1, 'More than 0'))
        .optional(),

      protein: zod
        .number()
        .min(0)
        .or(zod.string().min(1, 'More than 0'))
        .optional(),
      fats: zod
        .number()
        .min(0)
        .or(zod.string().min(1, 'More than 0'))
        .optional(),
      carbohydrates: zod
        .number()
        .min(0)
        .or(zod.string().min(1, 'More than 0').optional()),
    })
    .optional(),

  spiceLevel: zod.number().min(0).max(3),
  weight: zod
    .number()
    .min(0, 'Weight must be non-negative')
    .max(100, 'Weight must be less than or equal to 100kg')
    .or(zod.string().min(1, 'Weight must id required')),

  isAvailable: zod.boolean(),
});
