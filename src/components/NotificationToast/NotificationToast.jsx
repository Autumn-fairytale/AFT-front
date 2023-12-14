import { toast } from 'react-toastify';

import { CardContent, Stack, Typography } from '@mui/material';

import { AppButton } from '@/shared';
import { chipStatusColors } from '../TableComponents/TableChip/chipStatusColors';
import { CloseBtn } from './CloseBtn/CloseBtn';
import { handleRedirect } from './handleRedirect';
import { NotificationContent } from './NotificationContent';
import {
  NotificationContentProps,
  NotificationToastProps,
} from './NotificationToast.props';
import {
  StyledToast,
  StyledToastCard,
  StyledToastCardBox,
} from './NotificationToastStyled';

export const NotificationToast = ({
  notifications = [],
  navigate,
  closeToast,
}) => {
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
                  orderId={notification.orderId}
                  notificationId={notification.id}
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
              onClick={() => {
                handleRedirect(role, navigate);
                toast.dismiss();
              }}
              label={` View ${role} Orders`}
              sx={{ width: '50px', height: 28, mx: 'auto' }}
            ></AppButton>
          </Stack>
        </StyledToastCard>
      ))}
      <CloseBtn onClose={closeToast} />
    </StyledToast>
  );
};

NotificationToast.propTypes = NotificationToastProps;
NotificationContent.propTypes = NotificationContentProps;
