import { toast } from 'react-toastify';

import { privateInstance } from '@/api/axios';
import { useQuery } from '@tanstack/react-query';

const useChefOrdersByStatus = (chefID, orderStatus) => {
  const fetchOrdersByStatus = async () => {
    try {
      const URI = `${
        import.meta.env.VITE_API_URL
      }/chefs/${chefID}/orders/${orderStatus}`;
      const { data } = await privateInstance.get(URI);
      console.log(data);
      return data;
    } catch (error) {
      toast.error('Error fetching orders');
      throw error;
    }
  };

  return useQuery({
    queryKey: ['orders', chefID, orderStatus],
    queryFn: fetchOrdersByStatus,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 3 * 60 * 1000,
    },
  });
};

export default useChefOrdersByStatus;
