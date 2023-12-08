import { privateInstance } from '../axios';

export const getCouriersOrdersByStatus = async (orderStatus) => {
  const { data } = await privateInstance.get(
    `${import.meta.env.VITE_API_URL}/couriers/allorders/${orderStatus}`
  );

  return data;
};
