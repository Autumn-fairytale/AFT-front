import { getPopularChefs } from '@/api';
import { queryKey } from '@/constants';
import { useQuery } from '@tanstack/react-query';

export const usePopularChefs = () => {
  const result = useQuery({
    queryKey: [queryKey.POPULAR_CHEFS],
    queryFn: getPopularChefs,
  });

  return result;
};
