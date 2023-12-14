import { convertToMoney } from '@/helpers';
import { formatDateForDataGrid } from '@/helpers/formatDateForDataGrid';
import PaymentButton from '../PaymentButton';
import { StatusCell } from '../TableComponents/StatusCell';
import UserOrderDetailsButton from './UserOrderDetailsButton';
import UserOrderItems from './UserOrderItems';

export const userOrdersTableColumns = [
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
    renderCell: ({ row: order }) =>
      order.isPaid ? (
        <StatusCell value={order.status} />
      ) : (
        <PaymentButton
          orderId={order.id}
          paidComponent={<StatusCell value="pending" />}
        />
      ),
  },
  {
    field: 'items',
    headerName: 'Order items',
    hideSortIcons: true,
    sortable: false,
    type: 'string',
    flex: 1,
    renderCell: ({ value: items }) => <UserOrderItems items={items} />,
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
    renderCell: ({ row: order }) => <UserOrderDetailsButton data={order} />,
  },
];
