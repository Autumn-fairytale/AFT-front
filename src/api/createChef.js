import { publicInstance } from './axios';

export const createChef = async (chef) => {
  const { data } = await publicInstance.post('/chefs', chef);

  return data;
};
