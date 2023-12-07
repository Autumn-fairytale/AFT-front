import { privateInstance } from '../axios';

export const createCourier = async (courierData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const { response } = await privateInstance.post(
    `${import.meta.env.VITE_API_URL}/couriers`,
    courierData,
    config
  );
  return response;
};
