import { useCallback, useMemo, useState } from 'react';

import LaunchIcon from '@mui/icons-material/Launch';
import { IconButton } from '@mui/material';

import { calculateTotalOrdersSum } from '@/helpers/calculateTotalOrdersSum';
import { formatDateForDataGrid } from '@/helpers/formatDateForDataGrid';
import useUserOrders from '@/hooks/useUserOrders ';
import AppChip from '@/shared/AppChip/AppChip';
import AppDataGridTable from '@/shared/AppDataGridTable/AppDataGridTable';
import { AppModal } from '@/shared/AppModal/AppModal';
import { CustomFooter } from './CustomFooter';
import { UserOrderDetails } from './UserOrderDetails';

export const UserOrdersTable = () => {
  const mockUserId = '6566e859a48ddb482e9ab846';
  const { data, isLoading, error } = useUserOrders(mockUserId);

  const [openModal, setOpenModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOpenModal = useCallback((order) => {
    setSelectedOrder(order);
    setOpenModal(true);
  }, []);

  const orders = data ? data.data.orders : [];
  // console.log(orders);
  const columns = useMemo(
    () => [
      {
        field: 'details',
        headerName: 'Details',
        renderCell: ({ row }) => (
          <IconButton onClick={() => handleOpenModal(row)}>
            <LaunchIcon />
          </IconButton>
        ),
        width: 100,
      },
      { field: 'orderNumber', headerName: 'Order-number', width: 150 },
      {
        field: 'createdAt',
        headerName: 'Date',
        width: 150,
        valueGetter: ({ value }) => {
          return formatDateForDataGrid(value);
        },
        type: 'Date',
      },
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
        type: 'string',
      },
    ],
    [handleOpenModal]
  );

  const totalSum = calculateTotalOrdersSum(orders);

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
        initialState={{
          sorting: {
            sortModel: [{ field: 'createdAt', sort: 'desc' }],
          },
        }}
      />
      <AppModal open={openModal} onClose={() => setOpenModal(false)}>
        {selectedOrder && <UserOrderDetails order={selectedOrder} />}
      </AppModal>
    </>
  );
};
