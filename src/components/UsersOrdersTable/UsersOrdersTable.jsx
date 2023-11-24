/* eslint-disable react/prop-types */
import { useState } from 'react';

import LaunchIcon from '@mui/icons-material/Launch';
import { IconButton } from '@mui/material';

import useUserOrders from '@/hooks/useUserOrders ';
import AppChip from '@/shared/AppChip/AppChip';
import AppDataGridTable from '@/shared/AppDataGridTable/AppDataGridTable';
import { AppModal } from '@/shared/AppModal/AppModal';
import { UsersOrderDetails } from './UsersOrderDetails';

export const UsersOrdersTable = () => {
  const { data, isLoading, error } = useUserOrders('655a051fb7cc813b6007220b');

  const [openModal, setOpenModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    setOpenModal(true);
  };

  if (error) return <div>Error loading data</div>;

  const orders = data ? data.data.orders : [];

  const columns = [
    {
      field: 'details',
      headerName: 'Details',
      renderCell: (params) => (
        <IconButton onClick={() => handleOpenModal(params.row)}>
          <LaunchIcon />
        </IconButton>
      ),
      width: 100,
    },
    { field: 'orderNumber', headerName: 'Order-number', width: 150 },
    { field: 'date', headerName: 'Created at', width: 150, type: 'Date' },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => <AppChip status={params.value} />,
    },
    { field: 'totalPrice', headerName: 'Total Price', type: 'number' },
    {
      field: 'address',
      valueGetter: ({ value }) => {
        if (!value) {
          return value;
        }
        const address = `${value.country},${value.city},${value.street}`;
        return address;
      },
      headerName: 'Address',
      width: 200,
    },
    {
      field: 'items',
      valueGetter: ({ value }) => {
        if (!value) {
          return value;
        }
        return value
          .map(
            (item, index) => `${index + 1}: ${item.name},  PSC: ${item.count} `
          )
          .join('');
      },
      headerName: 'Order items',
      flex: 0.5,
    },
  ];

  return (
    <>
      <AppDataGridTable columns={columns} rows={orders} loading={isLoading} />
      <AppModal open={openModal} onClose={() => setOpenModal(false)}>
        {selectedOrder && <UsersOrderDetails order={selectedOrder} />}
      </AppModal>
    </>
  );
};
