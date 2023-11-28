import { Divider, List, ListItem, Paper, Typography } from '@mui/material';

import PropTypes from 'prop-types';

import { formatDateForDataGrid } from '@/helpers/formatDateForDataGrid';

export const UserOrderDetails = ({ order }) => (
  <Paper elevation={3} sx={{ padding: 2, maxWidth: 300, margin: 'auto' }}>
    <Typography variant="h6" sx={{ textAlign: 'center' }}>
      Order Receipt
    </Typography>

    <Divider sx={{ my: 1 }} />

    <Typography variant="subtitle1">
      Order Number: {order.orderNumber}
    </Typography>

    <Typography variant="subtitle2">
      Date: {formatDateForDataGrid(order.createdAt)}
    </Typography>

    <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
      Dishes:
    </Typography>

    <List>
      {order.items.map((item, index) => (
        <ListItem key={index}>
          <Typography variant="body2">
            {item.name} - {item.count} pcs
          </Typography>
        </ListItem>
      ))}
    </List>

    <Typography variant="subtitle1" sx={{ mt: 2 }}>
      Total Price: ${order.totalPrice.toFixed(2)}
    </Typography>
  </Paper>
);

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
  }).isRequired,
};
