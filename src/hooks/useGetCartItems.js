import { useSelector } from 'react-redux';

import { getCartItems } from '@/api';
import { selectUser } from '@/redux/auth/selectors';
import { useQuery } from '@tanstack/react-query';

export const useGetCartItems = () => {
  const id = useSelector(selectUser)?.id;

  const result = useQuery({
    queryKey: ['cart', id],
    queryFn: async () => getCartItems(id),
    enabled: !!id,
  });

  return result;
};
