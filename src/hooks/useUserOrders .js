import { useSelector } from 'react-redux';

import { getUserOrders } from '@/api';
import { queryKey } from '@/constants';
import { selectUser } from '@/redux/auth/selectors';
import { useQuery } from '@tanstack/react-query';

const useUserOrders = () => {
  const userId = useSelector(selectUser)?.id;
  const key = [queryKey.ORDERS, userId];

  return useQuery({
    queryKey: key,
    queryFn: () => getUserOrders(userId),
    enabled: !!userId,
  });
};

export default useUserOrders;
