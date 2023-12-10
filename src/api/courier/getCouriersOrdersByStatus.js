import { privateInstance } from '../axios';

export const getCouriersOrdersByStatus = async (orderStatus) => {
  const { data } = await privateInstance.get(
    `/couriers/allorders/${orderStatus}`
  );

  return data;
};
