import { getUnreadNotifications } from '@/api/notifications/getUnreadNotifications';
import { useQuery } from '@tanstack/react-query';

export const useUnreadNotifications = () => {
  return useQuery({
    queryKey: ['unreadNotifications'],
    queryFn: getUnreadNotifications,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    refetchOnWindowFocus: true,
  });
};
