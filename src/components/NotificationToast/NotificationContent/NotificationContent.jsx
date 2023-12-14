/* eslint-disable react/prop-types */
import { useState } from 'react';

import { Checkbox, Chip, List, ListItem, ListItemText } from '@mui/material';

import { useMarkNotificationAsRead } from '@/hooks/notifications/useMarkNotificationAsRead';

const parseNotificationContent = (notification, chipStatusColors) => {
  let orderNumberMatch = notification.match(/order (\d+)/);
  let statusMatch = notification.match(/updated to (\w+|\W+)/);

  if (!orderNumberMatch) {
    orderNumberMatch = notification.match(/Number: (\d+)/);
  }

  const parsedContent = {
    isNewOrder: notification.includes('new order with Number:'),
    orderNumber: orderNumberMatch ? orderNumberMatch[1] : null,
    updateStatus: statusMatch ? statusMatch[1] : null,
    statusColor: 'default',
  };

  if (parsedContent.updateStatus === 'readyToDelivery') {
    parsedContent.updateStatus = '→ delivery';
    parsedContent.statusColor = 'info';
  } else {
    const statusKey = parsedContent.updateStatus
      ?.toLowerCase()
      .replace(/\s+/g, '');
    parsedContent.statusColor = chipStatusColors[statusKey] || 'default';
  }

  return parsedContent;
};

export const NotificationContent = ({
  content,
  chipStatusColors,
  notificationId,
}) => {
  const { isNewOrder, orderNumber, updateStatus, statusColor } =
    parseNotificationContent(content, chipStatusColors);

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
          <ListItemText primary="New order with Number:" />
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
          <Chip
            label={updateStatus}
            color={statusColor}
            size="small"
            sx={{ minWidth: 116 }}
          />
        </ListItem>
      )}
    </List>
  );
};
