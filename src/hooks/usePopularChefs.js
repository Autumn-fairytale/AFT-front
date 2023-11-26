import { getPopularChefs } from '@/api';
import { useQuery } from '@tanstack/react-query';

export const usePopularChefs = () => {
  const result = useQuery({
    queryKey: ['popularChefs'],
    queryFn: getPopularChefs,
  });

  return result;
};
