import { useCallback, useMemo, useState } from 'react';

import LaunchIcon from '@mui/icons-material/Launch';
import { IconButton } from '@mui/material';

import useUserOrders from '@/hooks/useUserOrders ';
import AppChip from '@/shared/AppChip/AppChip';
import AppDataGridTable from '@/shared/AppDataGridTable/AppDataGridTable';
import { AppModal } from '@/shared/AppModal/AppModal';
import { calculateTotalSum } from './calculateTotalSum';
import { CustomFooter } from './CustomFooter';
import { UserOrderDetails } from './UserOrderDetails';

export const UserOrdersTable = () => {
  const { data, isLoading, error } = useUserOrders('655a051fb7cc813b6007220b');

  const [openModal, setOpenModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOpenModal = useCallback((order) => {
    setSelectedOrder(order);
    setOpenModal(true);
  }, []);

  const orders = data ? data.data.orders : [];

  const columns = useMemo(
    () => [
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
        renderCell: ({ value }) => {
          const statusToShow =
            value === 'readyToDelivery' ? '→ delivery' : value;
          return <AppChip status={statusToShow} sx={{ width: 110 }} />;
        },
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
              (item, index) =>
                `${index + 1}: ${item.name},  psc: ${item.count} `
            )
            .join(';');
        },
        headerName: 'Order items',
        flex: 0.5,
      },
    ],
    [handleOpenModal]
  );

  const totalSum = calculateTotalSum(orders);

  return (
    <>
      <AppDataGridTable
        columns={columns}
        rows={orders}
        loading={isLoading}
        error={error}
        slots={{
          footer: () => (
            <CustomFooter
              totalSum={totalSum}
              pageSize={5}
              rowCount={orders.length}
            />
          ),
        }}
      />
      <AppModal open={openModal} onClose={() => setOpenModal(false)}>
        {selectedOrder && <UserOrderDetails order={selectedOrder} />}
      </AppModal>
    </>
  );
};
