import { getOrderPaymentSignature } from '@/api';
import { useQuery } from '@tanstack/react-query';

export const useGetOrderPaymentSignature = (orderId) => {
  const result = useQuery({
    queryKey: ['orderSignature', orderId],
    queryFn: async () => getOrderPaymentSignature(orderId),
  });

  return result;
};
