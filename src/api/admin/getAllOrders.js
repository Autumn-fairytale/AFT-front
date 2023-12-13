import { privateInstance } from '../axios';

export const getAllOrders = async () => {
  const response = await privateInstance.get(`/admin/allorders`);
  return response.data;
};
