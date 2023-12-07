import { privateInstance } from '../axios';

export const updateChef = async (chefData, chefId) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await privateInstance.patch(
    `${import.meta.env.VITE_API_URL}/chefs/${chefId}`,
    chefData,
    config
  );
  return response.data;
};
