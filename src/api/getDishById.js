import { publicInstance } from './axios';

export const getDishById = async (dishId) => {
  const { data } = await publicInstance.get(`dishes/${dishId}`);

  return data;
};
