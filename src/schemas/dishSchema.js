import zod from 'zod';

export const dishSchema = zod.object({
  name: zod.string().trim().min(1, 'Dish name required').required(),

  price: zod.number().positive('Any positive number').required(),

  description: zod.string().trim().min(10, 'Min 10 symbols').required(),

  image: zod.string().url('Must be a valid URL').required(),

  ingredients: zod
    .array(zod.string().min(1, 'Ingredient cannot be empty'))
    .required(),

  isVegan: zod.boolean().required(),

  cuisine: zod.string().min(1, 'Cuisine type required').required(),

  category: zod.string().min(1, 'Category required').required(),

  isAvailable: zod.boolean().optional(),

  cookingTime: zod
    .number()
    .positive('Cooking time must be positive')
    .optional(),

  allergens: zod
    .array(zod.string().min(1, 'Allergen cannot be empty'))
    .optional(),

  nutrition: zod
    .object({
      calories: zod.number(),
      protein: zod.number(),
      fats: zod.number(),
      carbohydrates: zod.number(),
    })
    .optional(),
});
