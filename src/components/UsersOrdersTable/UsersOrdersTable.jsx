/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useQuery } from 'react-query';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  Box,
  Chip,
  Collapse,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import axios from 'axios';

const useUserOrders = (userId) => {
  const fetchUserOrders = async () => {
    const URI = `http://localhost:4000/api/orders/by-user/${userId}`;
    const { data } = await axios.get(URI);
    return data;
  };

  return useQuery(['orders', userId], fetchUserOrders);
};

const statusColors = {
  pending: 'default',
  accepted: 'primary',
  cooking: 'secondary',
  readyToDelivery: 'info',
  delivering: 'warning',
  completed: 'success',
  canceled: 'error',
};

const StatusChip = ({ status }) => {
  const color = statusColors[status.toLowerCase()] || 'default';

  return <Chip label={status.toUpperCase()} color={color} size="small" />;
};

export const UsersOrdersTable = () => {
  const { data, isLoading, error } = useUserOrders('655a051fb7cc813b6007220b');

  const [clickedIndex, setClickedIndex] = useState(-1);

  if (error) return <div>Error loading data</div>;

  const orders = data ? data.data.orders : [];

  const getDynamicRowHeight = (params) => {
    if (params.id === clickedIndex) {
      return 200;
    }
    return 52;
  };

  const columns = [
    {
      field: 'expand',
      headerName: '',
      renderCell: (params) => (
        <IconButton
          onClick={() => {
            clickedIndex === params.id
              ? setClickedIndex(-1)
              : setClickedIndex(params.id);
          }}
        >
          {params.id === clickedIndex ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </IconButton>
      ),
      width: 60,
    },
    { field: 'orderNumber', headerName: 'Order-number', width: 150 },
    { field: 'date', headerName: 'Created at', width: 150, type: 'Date' },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => <StatusChip status={params.value} />,
    },
    { field: 'totalPrice', headerName: 'Total Price', type: 'number' },
    {
      field: 'address',
      renderCell: (orders) => {
        if (!orders.value) {
          return '';
        }
        const order = orders.value;
        return (
          <Box>
            <div>{orders.value.city}</div>
            <Collapse in={orders.id === clickedIndex}>
              <Box
                sx={{
                  borderTop: '2px solid',
                  borderTopColor: 'primary.main',
                  pt: 2,
                }}
              >
                <Typography variant="body2"> {order.country}</Typography>
                <Typography variant="body2"> {order.city}</Typography>
                <Typography variant="body2"> {order.street}</Typography>
              </Box>
            </Collapse>
          </Box>
        );
      },
      headerName: 'Address',
      width: 200,
      flex: 0.5,
    },
    {
      field: 'items',
      renderCell: (orders) => {
        if (!orders.value) {
          return '';
        }
        const order = orders.value;

        return (
          <Box>
            <Typography variant="body1">
              Total dishes: {order.length}
            </Typography>
            <Collapse in={orders.id === clickedIndex}>
              <Stack
                spacing={1}
                sx={{
                  borderTop: '2px solid',
                  borderTopColor: 'primary.main',
                  pt: 2,
                }}
              >
                {orders.value.map((order, index) => (
                  <Tooltip key={index} title={order.name}>
                    <Typography noWrap variant="body2">{` ${index + 1}: ${
                      order.name
                    }, PCS : ${order.count}`}</Typography>
                  </Tooltip>
                ))}
              </Stack>
            </Collapse>
          </Box>
        );
      },
      headerName: 'Order items',
      flex: 1,
    },
  ];

  return (
    <Box sx={{ height: '500px', width: '100%' }}>
      <DataGrid
        rows={orders}
        columns={columns}
        getRowHeight={getDynamicRowHeight}
        slots={{
          toolbar: GridToolbar,
          loadingOverlay: LinearProgress,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        initialState={{
          filter: {
            filterModel: {
              items: [],
              quickFilterExcludeHiddenColumns: true,
            },
          },
        }}
        loading={isLoading}
        disableDensitySelector
        disableColumnFilter
        sx={{
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold',
          },
        }}
      />
    </Box>
  );
};
