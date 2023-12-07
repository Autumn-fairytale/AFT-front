import { privateInstance } from '../axios';

export const getDishChefOwn = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await privateInstance.get(
    `${import.meta.env.VITE_API_URL}/dishes/own`,
    config
  );
  return response.data;
};