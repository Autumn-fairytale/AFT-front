import { privateInstance } from '../axios';

export const getChefById = async (chefId) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await privateInstance.get(
    `${import.meta.env.VITE_API_URL}/chefs/${chefId}`,
    config
  );
  return response.data;
};
