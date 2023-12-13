import { getAllOrders } from '@/api/admin/getAllCouriers';
import { useQuery } from '@tanstack/react-query';

const useGetAllOrders = () => {
  const fetchAllOrders = async () => {
    try {
      const data = await getAllOrders();

      return data;
    } catch (error) {
      console.log('Error fetching couriers');
    }
  };

  return useQuery({
    queryKey: ['allorders'],
    queryFn: fetchAllOrders,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 3 * 60 * 1000,
    },
  });
};

export default useGetAllOrders;
