/* eslint-disable react/prop-types */
import { useState } from 'react';

import { Checkbox, Chip, List, ListItem, ListItemText } from '@mui/material';

import TableChip from '@/components/TableComponents/TableChip/TableChip';
import { statusToShow } from '@/components/TableComponents/tableHelpers';
import { useMarkNotificationAsRead } from '@/hooks/notifications/useMarkNotificationAsRead';

export const NotificationContent = ({ notificationId, notification }) => {
  const orderNumber = notification?.orderNumber;
  const updateStatus = statusToShow(notification?.updateStatus);
  const isNewOrder = notification?.type.toLowerCase().includes('new');

  const [readStatuses, setReadStatuses] = useState({});

  const markAsRead = useMarkNotificationAsRead();

  const handleMarkAsRead = (notificationId) => {
    markAsRead(notificationId);

    setReadStatuses((prev) => ({ ...prev, [notificationId]: true }));
  };

  return (
    <List dense>
      {isNewOrder && (
        <ListItem
          divider
          secondaryAction={
            <Checkbox
              edge="end"
              checked={!!readStatuses[notificationId]}
              onChange={() => handleMarkAsRead(notificationId)}
              title="Mark as read"
              disabled={!!readStatuses[notificationId]}
            />
          }
        >
          <ListItemText primary="New order Number:" />
          <Chip
            label={orderNumber}
            color="primary"
            size="small"
            sx={{ minWidth: 116 }}
          />
        </ListItem>
      )}
      {orderNumber && !isNewOrder && (
        <ListItem
          secondaryAction={
            <Checkbox
              edge="end"
              checked={!!readStatuses[notificationId]}
              onChange={() => handleMarkAsRead(notificationId)}
              title="Mark as read"
              disabled={!!readStatuses[notificationId]}
            />
          }
        >
          <ListItemText primary="Order Number:" />
          <Chip label={orderNumber} size="small" sx={{ minWidth: 116 }} />
        </ListItem>
      )}
      {updateStatus && (
        <ListItem
          divider
          secondaryAction={
            <Checkbox edge="end" sx={{ visibility: 'hidden' }} />
          }
        >
          <ListItemText primary="New status:" />
          <TableChip
            status={updateStatus}
            size="small"
            sx={{ minWidth: 116 }}
          />
        </ListItem>
      )}
    </List>
  );
};
