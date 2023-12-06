// import { toast } from 'react-toastify';

import { getChefOrders } from '@/api/getChefOrders';
import { useQuery } from '@tanstack/react-query';

const useChefOrder = (chefID) => {
  const fetchUserOrders = async () => {
    try {
      const data = await getChefOrders();

      return data;
    } catch (error) {
      console.log('Error fetching orders');
      // toast.error('Error fetching orders');
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
