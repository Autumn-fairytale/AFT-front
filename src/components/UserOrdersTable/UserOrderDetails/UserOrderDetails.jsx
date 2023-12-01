import FastfoodIcon from '@mui/icons-material/Fastfood';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Box, Divider, List, Typography } from '@mui/material';

import PropTypes from 'prop-types';

import { HryvniaIcon } from '@/assets/images/HryvniaIcon';
import { formatDateForDataGrid } from '@/helpers/formatDateForDataGrid';
import { ImageWithSpinner } from './ImageWithSpinner';
import {
  StyledUserOrderDetailsBox,
  StyledUserOrderDetailsListItem,
  StyledUserOrderDetailsPaper,
  StyledUserOrderDetailsTypography,
} from './UserOrderDetailStyled';

export const UserOrderDetails = ({ order }) => {
  return (
    <StyledUserOrderDetailsPaper elevation={3}>
      <StyledUserOrderDetailsBox>
        <ReceiptIcon sx={{ mr: 1 }} />

        <StyledUserOrderDetailsTypography>
          Order Receipt
        </StyledUserOrderDetailsTypography>
      </StyledUserOrderDetailsBox>

      <Divider sx={{ my: 1 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
          Order Number: {order.orderNumber}
        </Typography>

        <Typography variant="subtitle2">
          Date: {formatDateForDataGrid(order.createdAt)}
        </Typography>
      </Box>

      <Divider sx={{ my: 1 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <FastfoodIcon sx={{ mr: 1 }} />

        <Typography variant="subtitle2">Dishes:</Typography>
      </Box>

      <List>
        {order.items.map((item, index) => (
          <StyledUserOrderDetailsListItem key={index}>
            <ImageWithSpinner src={item.dish.image} alt={item.name} />

            <Typography variant="body1" sx={{ mt: 1 }}>
              {item.name} - {item.count} pcs
            </Typography>
          </StyledUserOrderDetailsListItem>
        ))}
      </List>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <HryvniaIcon sx={{ mr: 1, fontSize: 20 }} />

        <Typography
          variant="subtitle1"
          sx={{ color: 'primary.main', fontWeight: 'bold' }}
        >
          Total Price: {order.totalPrice}₴
        </Typography>
      </Box>

      <Divider sx={{ my: 1 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <HomeIcon sx={{ mr: 1 }} />

        <Typography variant="body1">
          Address: {order.address?.street}, {order.address?.city},
          {order.address?.country}
        </Typography>
      </Box>

      <Divider sx={{ my: 1 }} />
      <Typography variant="h6" sx={{ textAlign: 'center', mt: 1 }}>
        Thank you for your order! :)
      </Typography>
    </StyledUserOrderDetailsPaper>
  );
};

UserOrderDetails.propTypes = {
  order: PropTypes.shape({
    orderNumber: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
      })
    ).isRequired,
    createdAt: PropTypes.string,
    totalPrice: PropTypes.number.isRequired,
    address: PropTypes.object.isRequired,
  }).isRequired,
};
