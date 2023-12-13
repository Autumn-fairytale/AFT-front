import { Button, CardContent, Stack, Typography } from '@mui/material';

import { NotificationToastProps } from './NotificationToast.props';
import {
  StyledToast,
  StyledToastCard,
  StyledToastCardBox,
} from './NotificationToastStyled';

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
        <StyledToastCard key={role}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {roleNotifications?.length} new Notifications for {role}
            </Typography>
            <StyledToastCardBox>
              {roleNotifications.map((notification, index) => (
                <Typography key={index} variant="body2" paragraph>
                  {notification.content}
                </Typography>
              ))}
            </StyledToastCardBox>
          </CardContent>
          <Stack
            sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 2 }}
          >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="small"
              onClick={() => handleRedirect(role)}
            >
              View {role} Orders
            </Button>
          </Stack>
        </StyledToastCard>
      ))}
    </StyledToast>
  );
};

NotificationToast.propTypes = NotificationToastProps;
