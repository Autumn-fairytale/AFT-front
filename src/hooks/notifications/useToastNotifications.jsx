import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

import { NotificationToast } from '@/components/NotificationToast';
import { useNotifications } from './useNotifications';

export const useToastNotifications = (navigate) => {
  const { notifications } = useNotifications();
  const toastIdRef = useRef(null);
  const lastNotificationId = useRef(null);

  useEffect(() => {
    const latestNotification =
      notifications && notifications.length > 0
        ? notifications[notifications.length - 1]
        : null;

    if (
      latestNotification &&
      lastNotificationId.current !== latestNotification.id
    ) {
      const content = (
        <NotificationToast notifications={notifications} navigate={navigate} />
      );
      if (toast.isActive(toastIdRef.current)) {
        toast.update(toastIdRef.current, { render: content, autoClose: false });
      } else {
        toastIdRef.current = toast(content, {
          autoClose: false,
          closeOnClick: false,
          position: 'top-left',
          closeButton: false,
          style: { width: '500px' },
          onClose: () => {
            toastIdRef.current = null;
          },
        });
      }
      lastNotificationId.current = latestNotification.id;
    }
  }, [notifications, navigate]);
};
