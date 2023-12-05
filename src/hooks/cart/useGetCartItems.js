import { useSelector } from 'react-redux';

import { getCartItems } from '@/api';
import { queryKey } from '@/constants';
import { selectUser } from '@/redux/auth/selectors';
import { useQuery } from '@tanstack/react-query';

export const useGetCartItems = () => {
  const userId = useSelector(selectUser)?.id;

  const result = useQuery({
    queryKey: [queryKey.CART, userId],
    queryFn: async () => getCartItems(userId),
    enabled: !!userId,
  });

  return result;
};
