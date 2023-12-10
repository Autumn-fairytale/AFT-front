import { privateInstance } from '../axios';

export const getChefById = async (chefId) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await privateInstance.get(`/chefs/${chefId}`, config);
  return response.data;
};
