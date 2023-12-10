import { getPopularChefs } from '@/api';
import { useQuery } from '@tanstack/react-query';

export const usePopularChefs = (userId, type) => {
  const result = useQuery({
    queryKey: ['popularChefs'],
    queryFn: getPopularChefs(userId, type),
  });

  return result;
};
