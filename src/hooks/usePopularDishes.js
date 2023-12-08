import { getPopularDishes } from '@/api';
import { queryKey } from '@/constants';
import { useQuery } from '@tanstack/react-query';

export const usePopularDishes = () => {
  const result = useQuery({
    queryKey: [queryKey.POPULAR_DISHES],
    queryFn: getPopularDishes,
  });

  return result;
};
