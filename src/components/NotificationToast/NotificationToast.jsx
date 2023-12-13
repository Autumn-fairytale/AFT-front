import {
  CardContent,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import Chip from '@mui/material/Chip';

import { AppButton } from '@/shared';
import { chipStatusColors } from '../TableComponents/TableChip/chipStatusColors';
import {
  NotificationContentProps,
  NotificationToastProps,
} from './NotificationToast.props';
import {
  StyledToast,
  StyledToastCard,
  StyledToastCardBox,
} from './NotificationToastStyled';

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

const NotificationContent = ({ content, chipStatusColors }) => {
  const { isNewOrder, orderNumber, updateStatus, statusColor } =
    parseNotificationContent(content, chipStatusColors);

  return (
    <List dense>
      {isNewOrder && (
        <ListItem divider>
          <ListItemText primary="You have a new order with Number:" />
          <Chip
            label={orderNumber}
            color="primary"
            size="small"
            sx={{ minWidth: 116 }}
          />
        </ListItem>
      )}
      {orderNumber && !isNewOrder && (
        <ListItem>
          <ListItemText primary="Order Number:" />
          <Chip label={orderNumber} size="small" sx={{ minWidth: 116 }} />
        </ListItem>
      )}
      {updateStatus && (
        <ListItem divider>
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

export const NotificationToast = ({ notifications = [], navigate }) => {
  const handleRedirect = (role) => {
    switch (role) {
      case 'chef':
        navigate('/chef-account/orders');
        break;
      case 'user':
        navigate('/orders');
        break;
      case 'courier':
        navigate('/courier-account/orders');
        break;
      default:
        break;
    }
  };

  const groupedNotifications =
    notifications?.length > 0 &&
    notifications.reduce((acc, notification) => {
      acc[notification.role] = [
        ...(acc[notification.role] || []),
        notification,
      ];
      return acc;
    }, {});

  return (
    <StyledToast>
      {Object.entries(groupedNotifications).map(([role, roleNotifications]) => (
        <StyledToastCard key={role} elevation={5}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {roleNotifications?.length} new Notifications for {role}
            </Typography>
            <StyledToastCardBox>
              {roleNotifications.map((notification, index) => (
                <NotificationContent
                  key={index}
                  content={notification.content}
                  chipStatusColors={chipStatusColors}
                />
              ))}
            </StyledToastCardBox>
          </CardContent>
          <Stack
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '8px 16px',
            }}
          >
            <AppButton
              variant="contained"
              color="primary"
              fullWidth
              size="small"
              onClick={() => handleRedirect(role)}
              label={` View ${role} Orders`}
              sx={{ width: '50px', height: 28, mx: 'auto' }}
            ></AppButton>
          </Stack>
        </StyledToastCard>
      ))}
    </StyledToast>
  );
};

NotificationToast.propTypes = NotificationToastProps;
NotificationContent.propTypes = NotificationContentProps;
