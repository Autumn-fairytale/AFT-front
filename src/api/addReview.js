import { publicInstance } from './axios';

export const addReview = async ({ rating, review, dishId }) => {
  await publicInstance.post(`reviews`, { rating, review, dish: dishId });

  return;
};
