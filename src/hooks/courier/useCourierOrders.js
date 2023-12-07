import { getCourierOrders } from '@/api/courier/getCourierOrders';
import { useQuery } from '@tanstack/react-query';

const useCourierOrder = (courierId) => {
  const fetchCourierOrders = async () => {
    try {
      const data = await getCourierOrders();

      return data;
    } catch (error) {
      console.log('Error fetching orders');
      // toast.error('Error fetching orders');
      throw error;
    }
  };

  return useQuery({
    queryKey: ['orders', courierId],
    queryFn: fetchCourierOrders,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 3 * 60 * 1000,
    },
  });
};

export default useCourierOrder;
