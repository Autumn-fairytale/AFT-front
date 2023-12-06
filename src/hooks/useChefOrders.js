import { toast } from 'react-toastify';

import { privateInstance } from '@/api/axios';
//import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useChefOrder = (chefID) => {
  const fetchUserOrders = async () => {
    try {
      // const URI = `http://localhost:4000/api/chefs/${chefID}`;
      //const URI = `http://localhost:4000/api/chefs/${chefID}/orders`;
      const URI = `${import.meta.env.VITE_API_URL}/chefs/${chefID}/orders`;
      //const { data } = await axios.get(URI);
      const { data } = await privateInstance.get(URI);
      //console.log(data);
      return data;
    } catch (error) {
      toast.error('Error fetching orders');
      throw error;
    }
  };

  return useQuery({
    queryKey: ['orders', chefID],
    queryFn: fetchUserOrders,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 3 * 60 * 1000,
    },
  });
};

export default useChefOrder;
