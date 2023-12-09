import { publicInstance } from '../axios';

export const getChefs = async () => {
  const { data } = await publicInstance.get(`/chefs`);

  return data;
};
