import { publicInstance } from './axios';

export const getReviewsByChefId = async (id, page = 1, limit = 3) => {
  const { data } = await publicInstance.get(
    `reviews/by-chef/${id}?page=${page}&limit=${limit}`
  );

  return data;
};
