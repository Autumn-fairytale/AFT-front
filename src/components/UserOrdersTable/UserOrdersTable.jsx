import { useCallback, useMemo, useState } from 'react';

import LaunchIcon from '@mui/icons-material/Launch';
import { IconButton } from '@mui/material';

import { convertToMoney } from '@/helpers';
import { calculateTotalOrdersSum } from '@/helpers/calculateTotalOrdersSum';
import { formatDateForDataGrid } from '@/helpers/formatDateForDataGrid';
import useUserOrders from '@/hooks/useUserOrders ';
import AppDataGridTable from '@/shared/AppDataGridTable/AppDataGridTable';
import { AppModal } from '@/shared/AppModal/AppModal';
import PaymentButton from '../PaymentButton';
import { StatusCell } from '../TableComponents/StatusCell';
import { CustomFooter } from './CustomFooter';
import { UserOrderDetails } from './UserOrderDetails/';
import UserOrderItems from './UserOrderItems';

export const UserOrdersTable = () => {
  const { data, isLoading, error } = useUserOrders();

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
        field: 'orderNumber',
        headerName: 'Order №',
        headerAlign: 'center',
        hideSortIcons: true,
        sortable: false,
        align: 'center',
        width: 130,
      },
      {
        field: 'createdAt',
        headerName: 'Date',
        headerAlign: 'center',
        align: 'center',
        hideSortIcons: true,
        sortable: false,
        valueGetter: ({ value }) => formatDateForDataGrid(value),
        type: 'Date',
        width: 100,
      },
      {
        field: 'status',
        headerName: 'Status',
        headerAlign: 'center',
        align: 'center',
        hideSortIcons: true,
        sortable: false,
        width: 150,
        renderCell: (cell) =>
          cell.row.isPaid ? (
            StatusCell(cell)
          ) : (
            <PaymentButton orderId={cell.row.id} />
          ),
      },
      {
        field: 'items',
        headerName: 'Order items',
        hideSortIcons: true,
        sortable: false,
        type: 'string',
        flex: 1,
        renderCell: ({ row }) => <UserOrderItems items={row.items} />,
      },
      {
        field: 'totalPrice',
        headerName: 'Total Price',
        headerAlign: 'center',
        align: 'center',
        hideSortIcons: true,
        sortable: false,
        cellClassName: 'boldCell',
        valueGetter: ({ value }) => convertToMoney(value),
      },

      {
        field: 'details',
        headerName: 'Details',
        headerAlign: 'center',
        align: 'center',
        hideSortIcons: true,
        sortable: false,
        renderCell: ({ row }) => (
          <IconButton
            sx={{ color: 'primary.main' }}
            onClick={() => handleOpenModal(row)}
          >
            <LaunchIcon />
          </IconButton>
        ),
      },
    ],
    [handleOpenModal]
  );

  const totalOrdersPrice = useMemo(
    () => calculateTotalOrdersSum(orders),
    [orders]
  );

  const closeModalHandler = useCallback(() => setOpenModal(false), []);

  return (
    <>
      <AppDataGridTable
        columns={columns}
        rows={orders}
        loading={isLoading}
        error={error}
        pageSize={10}
        disableColumnMenu={true}
        disableColumnFilter={true}
        disableColumnSelector={true}
        rowHeight={60}
        slots={{
          footer: () => (
            <CustomFooter
              totalSum={totalOrdersPrice}
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
      {openModal && (
        <AppModal isOpen={openModal} onClose={closeModalHandler}>
          <UserOrderDetails order={selectedOrder} />
        </AppModal>
      )}
    </>
  );
};
