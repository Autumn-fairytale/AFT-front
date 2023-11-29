import { publicInstance } from './axios';

export const editReview = async ({ rating, review, dishId, reviewId }) => {
  console.log('reviewId:', reviewId);
  console.log('dishId:', dishId);
  console.log('review:', review);
  console.log('rating:', rating);

  await publicInstance.put(`reviews/${reviewId}`, {
    rating,
    review,
    dish: dishId,
  });

  return;
};
