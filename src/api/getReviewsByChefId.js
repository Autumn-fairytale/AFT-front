import { publicInstance } from './axios';

export const getReviewsByChefId = async (id) => {
  const { data } = await publicInstance.get(`reviews/by-chef/${id}`);

  return data;
};
