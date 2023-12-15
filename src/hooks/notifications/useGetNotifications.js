import { getNotifications } from '@/api/notifications/getReadNotifications';
import { useQuery } from '@tanstack/react-query';

export const useGetNotifications = ({ read, role } = {}) => {
  return useQuery({
    queryKey: ['notifications', { read, role }],
    queryFn: () => getNotifications({ read, role }),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    refetchOnWindowFocus: true,
  });
};
