import { publicInstance } from './axios';

export const getReviewsByDishId = async (id) => {
  await publicInstance.delete(`reviews/${id}`);
};
