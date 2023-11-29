/* eslint-disable react/prop-types */
import { useState } from 'react';

import FastfoodIcon from '@mui/icons-material/Fastfood';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import {
  Box,
  CircularProgress,
  Divider,
  List,
  ListItem,
  Paper,
  Typography,
} from '@mui/material';

import PropTypes from 'prop-types';

import { HryvniaIcon } from '@/assets/images/HryvniaIcon';
import { formatDateForDataGrid } from '@/helpers/formatDateForDataGrid';

export const UserOrderDetails = ({ order }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        maxWidth: 400,
        maxHeight: '85vh',
        margin: 'auto',
        overflowY: 'auto',
        backgroundColor: 'background.paper',
        '::-webkit-scrollbar': {
          width: '4px',
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#888',
          borderRadius: '2px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#555',
        },
      }}
    >
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <ReceiptIcon sx={{ mr: 1 }} />
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          Order Receipt
        </Typography>
      </Box>

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
          <ListItem
            key={index}
            sx={{ flexDirection: 'column', alignItems: 'flex-start', mb: 2 }}
          >
            <ImageWithSpinner src={item.dish.image} alt={item.name} />
            <Typography variant="body1" sx={{ mt: 1 }}>
              {item.name} - {item.count} pcs
            </Typography>
          </ListItem>
        ))}
      </List>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <HryvniaIcon sx={{ mr: 1, fontSize: 22 }} />
          <Typography
            variant="subtitle1"
            sx={{ color: 'primary.main', fontWeight: 'bold' }}
          >
            Total Price: ₴{order.totalPrice.toFixed(2)}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 1 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <HomeIcon sx={{ mr: 1 }} />
        <Typography variant="body1">
          Address: {order.address?.street}, {order.address.city},{' '}
          {order.address?.country}
        </Typography>
      </Box>

      <Divider sx={{ my: 1 }} />
      <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
        Thank you for your order!
      </Typography>
    </Paper>
  );
};

const ImageWithSpinner = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box sx={{ width: '100%', position: 'relative', textAlign: 'center' }}>
      {!loaded && (
        <CircularProgress
          size={24}
          sx={{
            position: 'absolute',
            top: '45%',
            left: '45%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: 'auto',
          display: loaded ? 'block' : 'none',
        }}
        onLoad={() => setLoaded(true)}
      />
    </Box>
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
  }).isRequired,
};
