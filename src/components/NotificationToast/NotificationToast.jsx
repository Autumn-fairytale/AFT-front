import { Button, CardContent, Typography } from '@mui/material';

import { NotificationToastProps } from './NotificationToast.props';
import { StyledToastCard } from './NotificationToastStyled';

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
    <div>
      {Object.entries(groupedNotifications).map(([role, roleNotifications]) => (
        <StyledToastCard key={role}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Notifications for {role}
            </Typography>
            {roleNotifications.map((notification, index) => (
              <Typography key={index} variant="body2" paragraph>
                {notification.content}
              </Typography>
            ))}
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleRedirect(role)}
            >
              View {role} Page
            </Button>
          </CardContent>
        </StyledToastCard>
      ))}
    </div>
  );
};

NotificationToast.propTypes = NotificationToastProps;
