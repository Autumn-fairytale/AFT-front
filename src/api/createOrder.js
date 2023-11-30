import { publicInstance } from './axios';

export const createOrder = async (order) => {
  const { data } = await publicInstance.post('/orders', order);

  return data;
};
