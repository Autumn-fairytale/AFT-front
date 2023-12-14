import { getAllOrders } from '@/api/admin/getAllOrders';
import { useQuery } from '@tanstack/react-query';

const useGetAllOrders = () => {
  const fetchAllOrders = async () => {
    try {
      const data = await getAllOrders();

      return data;
    } catch (error) {
      console.log('Error fetching all orders');
    }
  };

  return useQuery({
    queryKey: ['admin', 'allorders'],
    queryFn: fetchAllOrders,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 3 * 60 * 1000,
    },
  });
};

export default useGetAllOrders;
