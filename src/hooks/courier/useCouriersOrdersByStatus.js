import { getCouriersOrdersByStatus } from '@/api/courier/getCouriersOrdersByStatus';
import { useQuery } from '@tanstack/react-query';

const useCouriersOrdersByStatus = (orderStatus) => {
  const fetchOrdersByStatus = async () => {
    const data = await getCouriersOrdersByStatus(orderStatus);
    return data;
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
