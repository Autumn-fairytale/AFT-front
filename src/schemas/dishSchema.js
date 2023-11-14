import * as zod from 'zod';

export const dishSchema = zod.object({
  name: zod.string().trim().min(1, { message: 'Dish name required' }),

  price: zod
    .number()
    .positive('Price must be greater than zero')
    .or(zod.string().min(1, 'Number is required')),

  cuisine: zod.string().min(1, 'Cuisine is required'),

  category: zod.string().min(1, 'Category is required'),

  description: zod.string().min(10, 'Min 10 symbols'),

  image: zod.string().url('Must be a valid URL'),

  ingredients: zod
    .array(zod.string().min(1, 'Ingredient cannot be empty'))
    .min(1, 'At least one ingredient is required'),

  isVegan: zod.boolean(),

  // cookingTime: zod
  //   .number()
  //   .positive('Cooking time must be positive')
  //   .optional(),

  // nutrition: zod
  //   .object({
  //     calories: zod.number().min(0),
  //     protein: zod.number().min(0),
  //     fats: zod.number().min(0),
  //     carbohydrates: zod.number().min(0),
  //   })
  //   .optional(),

  //weight
  //isAvailable
  //cookTime
  //spiceLevel
});
