import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import axios from 'axios';

const useChefOrder = (chefID) => {
  const fetchUserOrders = async () => {
    try {
      const URI = `http://localhost:4000/api/chefs/${chefID}/orders`;

      const { data } = await axios.get(URI);

      return data;
    } catch (error) {
      toast.error('Error fetching orders');
      throw error;
    }
  };

  return useQuery(['orders', chefID], fetchUserOrders, {
    refetchOnWindowFocus: false,
    staleTime: 3 * 60 * 1000,
  });
};

export default useChefOrder;
