import { publicInstance } from './axios';

export const deleteByReviewId = async (id) => {
  await publicInstance.delete(`reviews/${id}`);
};
