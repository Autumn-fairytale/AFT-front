import { publicInstance } from './axios';

export const addReview = async ({ rating, review, dishId }) => {
  console.log('dishId:', dishId);
  console.log('review:', review);
  console.log('rating:', rating);

  await publicInstance.post(`reviews`, { rating, review, dish: dishId });

  return;
};
