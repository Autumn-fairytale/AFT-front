import { useEffect, useState } from 'react';

import { getUnreadNotifications } from '@/api/notifications/getUnreadNotifications';
import { useQuery } from '@tanstack/react-query';
const { VITE_API_URL } = import.meta.env;

export const useNotifications = () => {
  const [isSseConnected, setIsSseConnected] = useState(false);

  const { data, refetch } = useQuery({
    queryKey: ['unreadNotifications'],
    queryFn: getUnreadNotifications,
    enabled: !isSseConnected,
  });

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const eventSource = new EventSource(
      `${VITE_API_URL}/sse?token=${storedToken}`
    );

    eventSource.onmessage = (e) => {
      const notifications = JSON.parse(e.data);
      console.log(notifications);
      setIsSseConnected(true);
    };

    eventSource.onerror = () => {
      setIsSseConnected(false);
      refetch();
    };

    return () => {
      eventSource.close();
    };
  }, [refetch]);

  return { notifications: data, isSseConnected };
};
