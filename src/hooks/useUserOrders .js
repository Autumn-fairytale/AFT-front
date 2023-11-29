import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import axios from 'axios';

const useUserOrders = (userId) => {
  const fetchUserOrders = async () => {
    try {
      const URI = `http://localhost:4000/api/orders/by-user/${userId}`;

      const { data } = await axios.get(URI);
      console.log(data, 'users');
      return data;
    } catch (error) {
      toast.error('Error fetching orders');

      throw error;
    }
  };

  return useQuery(['orders', userId], fetchUserOrders, {
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
};

export default useUserOrders;
