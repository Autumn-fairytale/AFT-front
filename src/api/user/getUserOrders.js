import { privateInstance } from '../axios';

export const getUserOrders = async (userId) => {
  const { data } = await privateInstance.get(`/users/${userId}/orders`);

  return data;
};
