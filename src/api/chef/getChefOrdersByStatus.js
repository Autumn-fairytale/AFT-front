import { privateInstance } from '../axios';

export const getChefOrdersByStatus = async (orderStatus) => {
  const { data } = await privateInstance.get(
    `${import.meta.env.VITE_API_URL}/chefs/orders/${orderStatus}`
  );

  return data;
};
