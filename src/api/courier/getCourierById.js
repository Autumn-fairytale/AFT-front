import { privateInstance } from '../axios';

export const getCourierById = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await privateInstance.get(
    `${import.meta.env.VITE_API_URL}/couriers`,
    config
  );
  return response.data;
};
