import { GridRowEditStopReasons } from '@mui/x-data-grid';

import { addSpacesToPhoneNumber, convertToMoney } from '@/helpers';
import AppDataGridTable from '@/shared/AppDataGridTable/AppDataGridTable';
import { formatDateForDataGrid } from '../../helpers/formatDateForDataGrid';
import { CustomPagination } from '../TableComponents/Pagination';
import { StatusCell } from '../TableComponents/StatusCell';
import { AllOrdersTablePropTypes } from './AllOrdersTable.props';

export const AllOrdersTable = ({ data, error, isLoading, tableHeight }) => {
  const orders = data ? data : [];
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const columns = [
    { field: 'orderNumber', headerName: 'Order-number', width: 150 },
    {
      field: 'createdAt',
      headerName: 'Date',
      width: 120,
      valueGetter: ({ value }) => {
        return formatDateForDataGrid(value);
      },
      type: 'Date',
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: true,
      type: 'singleSelect',
      valueOptions: ({ row }) => {
        if (!row) {
          return row;
        }
        return row.status;
      },
      renderCell: StatusCell,
    },
    {
      field: 'summaryPrice',
      headerName: 'Profit',
      valueGetter: ({ value }) => {
        return convertToMoney(value.tax);
      },
      cellClassName: 'boldCell',
      width: 150,
    },
    {
      field: 'chefInfo',
      valueGetter: (params) => {
        if (!params.value) {
          return params.value;
        }
      },
      headerName: 'Chef info',
      colId: 'chefInfo',
      flex: 0.5,
      renderCell: (params) => (
        <div style={{ whiteSpace: 'pre-wrap' }}>
          <p>
            {`${params.row.chefId?.userId?.firstName} ${params.row.chefId?.userId?.lastName}`}
          </p>
          <p>{`${addSpacesToPhoneNumber(params.row.chefId?.phoneNumber)}`}</p>
          <p>{`${params.row.chefId?.address.country}, ${params.row.chefId?.address.city}`}</p>
          <p>{`${params.row.chefId?.address.street} ${
            params.row.chefId?.address.houseNumber
          } ${
            params.row.chefId?.address?.apartment
              ? ', ' + params.row.chefId?.address.apartment
              : ''
          }`}</p>
        </div>
      ),
    },
    {
      field: 'courierId',
      headerName: 'Courier info',
      colId: 'courierInfo',
      flex: 0.5,
      renderCell: (params) => (
        <div style={{ whiteSpace: 'pre-wrap' }}>
          {params.row.courierId === null ? (
            'waiting'
          ) : (
            <>
              <p>
                {`${params.row.courierId?.userId?.firstName} ${params.row.courierId?.userId?.lastName}`}
              </p>
              <p>{addSpacesToPhoneNumber(params.row.courierId?.phoneNumber)}</p>
              <p>{`${params.row.chefId?.address.country}, ${params.row.chefId?.address.city}`}</p>
            </>
          )}
        </div>
      ),
    },
    {
      field: 'deliveryInfo',
      headerName: 'Delivery info',
      colId: 'deliveryInfo',
      flex: 0.5,
      renderCell: (params) => (
        <div style={{ whiteSpace: 'pre-wrap' }}>
          <p>{params.row.deliveryInfo?.name}</p>
          <p>{addSpacesToPhoneNumber(params.row.deliveryInfo?.phoneNumber)}</p>
          <p>{`${params.row.deliveryInfo?.address.country}, ${params.row.deliveryInfo?.address.city}`}</p>
          <p>{`${params.row.deliveryInfo?.address.street} ${
            params.row.deliveryInfo?.address.houseNumber
          } ${
            params.row.deliveryInfo?.address?.apartment
              ? ',' + params.row.deliveryInfo?.address.apartment
              : ''
          }`}</p>
        </div>
      ),
    },
  ];

  return (
    <>
      <AppDataGridTable
        columns={columns}
        rows={orders}
        loading={isLoading}
        error={error}
        editMode="row"
        onRowEditStop={handleRowEditStop}
        slots={{ pagination: CustomPagination }}
        initialState={{
          sorting: {
            sortModel: [{ field: 'createdAt', sort: 'desc' }],
          },
        }}
        sx={{
          '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
            py: '15px',
          },
        }}
        tableHeight={tableHeight}
        pageSize={10}
        rowHeight={100}
      />
    </>
  );
};

AllOrdersTable.propTypes = AllOrdersTablePropTypes;
