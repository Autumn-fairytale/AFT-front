import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import axios from 'axios';

const useUpdateOrderStatusByChef = (chefID) => {
  const fetchUserOrders = async () => {
    try {
      const URI = `http://localhost:4000/api/chefs/${chefID}/orders`;

      const { data } = await axios.get(URI);

      return data;
    } catch (error) {
      toast.error('Error updating status');

      throw error;
    }
  };

  return useQuery(['orders', chefID], () => fetchUserOrders(), {
    refetchOnWindowFocus: false,
    staleTime: 3 * 60 * 1000,
  });
};

export default useUpdateOrderStatusByChef;
