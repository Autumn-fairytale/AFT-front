import * as zod from 'zod';

export const dishSchema = zod.object({
  name: zod.string().trim().min(1, { message: 'Dish name required' }),

  price: zod.number().positive('Price must be greater than zero'),

  cuisine: zod.string().min(1, 'Cuisine is required'),

  category: zod.string().min(1, 'Category is required'),

  // description: zod.string().trim().min(10, 'Min 10 symbols'),

  // image: zod.string().url('Must be a valid URL'),

  // ingredients: zod.array(zod.string().min(1, 'Ingredient cannot be empty')),

  // isVegan: zod.boolean(),

  // cookingTime: zod
  //   .number()
  //   .positive('Cooking time must be positive')
  //   .optional(),

  // allergens: zod
  //   .array(zod.string().min(1, 'Allergen cannot be empty'))
  //   .optional(),

  // nutrition: zod
  //   .object({
  //     calories: zod.number(),
  //     protein: zod.number(),
  //     fats: zod.number(),
  //     carbohydrates: zod.number(),
  //   })
  //   .optional(),
});
