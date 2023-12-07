import { privateInstance } from '../axios';

export const updateCourier = async (courierData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await privateInstance.patch(
    `${import.meta.env.VITE_API_URL}/couriers`,
    courierData,
    config
  );
  return response.data;
};
