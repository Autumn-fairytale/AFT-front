import { useState } from 'react';

import { Chip, List, ListItem, ListItemText, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';

import TableChip from '@/components/TableComponents/TableChip/TableChip';
import { statusToShow } from '@/components/TableComponents/tableHelpers';
import { useMarkNotificationAsRead } from '@/hooks/notifications/useMarkNotificationAsRead';
import { AppButton } from '@/shared';
import { NotificationContentProps } from '../NotificationToast.props';

export const NotificationContent = ({ notification }) => {
  const [readStatuses, setReadStatuses] = useState({});

  const orderNumber = notification?.orderNumber;
  const updateStatus = statusToShow(notification?.updateStatus);
  const isNewOrder = notification?.type.toLowerCase().includes('new');
  const notificationId = notification?.id;

  const markAsRead = useMarkNotificationAsRead();

  const isRead = !!readStatuses[notificationId];

  const handleMarkAsRead = (notificationId) => {
    markAsRead(notificationId);
    setReadStatuses((prev) => ({ ...prev, [notificationId]: true }));
  };

  return (
    <List dense sx={{ my: 0.5 }}>
      {isNewOrder && (
        <>
          <ListItem sx={{ pb: 0 }}>
            <Stack direction="row" spacing={3} alignItems="center">
              <ListItemText primary="Your New order:" sx={{ flexGrow: 1 }} />
              <Chip
                label={orderNumber}
                size="small"
                sx={{ minWidth: 116, height: 24 }}
              />

              <AppButton
                onClick={() => handleMarkAsRead(notificationId)}
                title="Mark as read"
                variant="outlined"
                size="small"
                sx={{ maxHeight: '24px' }}
                label={!isRead ? 'Mark as read' : 'Message read'}
                disabled={isRead}
              />
            </Stack>
          </ListItem>
          <Divider variant="middle" sx={{ mt: 2 }} />
        </>
      )}
      {orderNumber && !isNewOrder && (
        <>
          <ListItem sx={{ pb: 0 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <ListItemText primary="№" />
              <Chip label={orderNumber} size="small" />

              <TableChip
                status={updateStatus}
                size="small"
                sx={{ minWidth: 116 }}
              />

              <AppButton
                onClick={() => handleMarkAsRead(notificationId)}
                title="Mark as read"
                variant="outlined"
                size="small"
                sx={{ maxHeight: '24px', width: '125px' }}
                label={!isRead ? 'Mark as read' : 'Read'}
                disabled={isRead}
              />
            </Stack>
          </ListItem>
          <Divider variant="middle" sx={{ mt: 2 }} />
        </>
      )}
    </List>
  );
};

NotificationContent.propTypes = NotificationContentProps;
