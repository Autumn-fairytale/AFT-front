import FastfoodIcon from '@mui/icons-material/Fastfood';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Box, Divider, List, Typography } from '@mui/material';

import PropTypes from 'prop-types';

import { HryvniaIcon } from '@/assets/images/HryvniaIcon';
import { convertToMoney } from '@/helpers';
import { formatDateForDataGrid } from '@/helpers/formatDateForDataGrid';
import { AppImage } from '@/shared';
import {
  StyledScrollBox,
  StyledUserOrderDetailsBox,
  StyledUserOrderDetailsListItem,
  StyledUserOrderDetailsPaper,
  StyledUserOrderDetailsTypography,
} from './UserOrderDetailStyled';

export const UserOrderDetails = ({ order }) => {
  return (
    <StyledUserOrderDetailsPaper
      elevation={3}
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <Box>
        <StyledUserOrderDetailsBox>
          <ReceiptIcon sx={{ mr: 1 }} />

          <StyledUserOrderDetailsTypography>
            Order Receipt
          </StyledUserOrderDetailsTypography>
        </StyledUserOrderDetailsBox>
        <Divider sx={{ my: 1 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
            Order №: {order.orderNumber}
          </Typography>

          <Typography variant="subtitle2">
            Date: {formatDateForDataGrid(order.createdAt)}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />
      </Box>

      <StyledScrollBox>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <FastfoodIcon sx={{ mr: 1 }} />

          <Typography variant="subtitle2">Dishes:</Typography>
        </Box>

        <List sx={{ padding: 0 }}>
          {order.items.map((item, index) => (
            <StyledUserOrderDetailsListItem key={index}>
              <AppImage
                src={item.dish.image}
                alt={item.dish.name}
                sx={{ boxShadow: 1 }}
              />

              <Box
                sx={{
                  display: 'flex',
                  flexGrow: 1,
                  flexDirection: 'column',
                  alignSelf: 'stretch',
                  gap: '5px',
                }}
              >
                <Typography
                  variant="body"
                  sx={{
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                  }}
                >
                  {item.dish.name}
                </Typography>
                <Typography
                  variant="body"
                  sx={{ fontStyle: 'italic', marginTop: 'auto' }}
                >
                  {convertToMoney(item.dish.price)}
                </Typography>
              </Box>

              <Typography
                variant="body"
                sx={{
                  width: '50px',
                  fontWeight: 600,
                  textAlign: 'center',
                  alignSelf: 'center',
                }}
              >
                x{item.count}
              </Typography>
            </StyledUserOrderDetailsListItem>
          ))}
        </List>
      </StyledScrollBox>

      <Box>
        <Divider sx={{ my: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <HomeIcon sx={{ mr: 1 }} />

          <Typography variant="body1">
            {`${order.deliveryInfo?.address?.street} ${order.deliveryInfo?.address?.houseNumber},
          ${order.deliveryInfo.address?.city},
          ${order.deliveryInfo.address?.country}`}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <HryvniaIcon sx={{ mr: '12px', fontSize: 20 }} />

          <Typography
            variant="subtitle1"
            sx={{ color: 'primary.main', fontWeight: 'bold' }}
          >
            Total Price: {convertToMoney(order.totalPrice)}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />
        <Typography variant="h6" sx={{ textAlign: 'center', mt: 1 }}>
          {`Thank you for your order! :)`}
        </Typography>
      </Box>
    </StyledUserOrderDetailsPaper>
  );
};

UserOrderDetails.propTypes = {
  order: PropTypes.shape({
    orderNumber: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        dish: PropTypes.shape({
          image: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }).isRequired,
        count: PropTypes.number.isRequired,
      })
    ).isRequired,
    createdAt: PropTypes.string,
    totalPrice: PropTypes.number.isRequired,
    deliveryInfo: PropTypes.shape({
      address: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};
