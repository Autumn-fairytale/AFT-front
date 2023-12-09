import { toast } from 'react-toastify';

import { getCouriersOrdersByStatus } from '@/api/courier/getCouriersOrdersByStatus';
import { useQuery } from '@tanstack/react-query';

const useCouriersOrdersByStatus = (orderStatus) => {
  const fetchOrdersByStatus = async () => {
    try {
      const data = await getCouriersOrdersByStatus(orderStatus);
      return data;
    } catch (error) {
      toast.error('Error fetching orders');
      throw error;
    }
  };

  return useQuery({
    queryKey: ['allorders', orderStatus],
    queryFn: fetchOrdersByStatus,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 3 * 60 * 1000,
    },
  });
};

export default useCouriersOrdersByStatus;
