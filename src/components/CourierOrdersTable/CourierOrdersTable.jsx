import { useCallback, useMemo, useState } from 'react';

import { GridRowEditStopReasons, GridRowModes } from '@mui/x-data-grid';

import { addSpacesToPhoneNumber, convertToMoney } from '@/helpers';
import AppDataGridTable from '@/shared/AppDataGridTable/AppDataGridTable';
import { formatDateForDataGrid } from '../../helpers/formatDateForDataGrid';
import { CustomPagination } from '../TableComponents/Pagination';
import { StatusCell } from '../TableComponents/StatusCell';
import { CourierOrdersTablePropTypes } from './CourierOrdersTable.props';
import { getActions } from './getActions';
import { getStatusOptions } from './getCourierStatusOptions';
import { processRowUpdate } from './processRowUpdate';

export const CourierOrdersTable = ({
  tableHeight,
  data,
  error,
  isLoading,
  refetchData,
}) => {
  const orders = data ? data : [];
  const [rowModesModel, setRowModesModel] = useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = useCallback(
    (id) => () => {
      setRowModesModel((prevModel) => ({
        ...prevModel,
        [id]: { mode: GridRowModes.Edit },
      }));
    },
    []
  );

  const handleSaveClick = useCallback(
    (id) => () => {
      setRowModesModel((prevModel) => ({
        ...prevModel,
        [id]: { mode: GridRowModes.View },
      }));
    },
    []
  );

  const handleCancelClick = useCallback(
    (id) => () => {
      setRowModesModel((prevModel) => ({
        ...prevModel,
        [id]: { mode: GridRowModes.View, ignoreModifications: true },
      }));
    },
    []
  );

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const updateRow = async (newRow, oldRow) => {
    return processRowUpdate(newRow, oldRow, refetchData);
  };

  const columns = useMemo(
    () => [
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
        editable: true,
        type: 'singleSelect',
        valueOptions: ({ row }) => {
          if (!row) {
            return row;
          }
          return getStatusOptions(row.status);
        },
        renderCell: StatusCell,
      },
      {
        field: 'actions',
        type: 'actions',
        headerName: 'Edit Status',
        width: 100,
        getActions: ({ id, row }) =>
          getActions(
            id,
            row,
            rowModesModel,
            handleSaveClick,
            handleCancelClick,
            handleEditClick
          ),
      },
      {
        field: 'summaryPrice',
        headerName: 'Your Profit',
        valueGetter: ({ value }) => {
          return convertToMoney(value?.delivery);
        },
        cellClassName: 'boldCell',
        width: 120,
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
            <p>{`${params.row.chefId?.address.city}, ${
              params.row.chefId?.address.street
            } ${params.row.chefId?.address.houseNumber} ${
              params.row.chefId?.address?.apartment
                ? ',' + params.row.chefId?.address.apartment
                : ''
            }`}</p>
          </div>
        ),
      },
      {
        field: 'userInfo',
        valueGetter: (params) => {
          if (!params.value) {
            return params.value;
          }
        },
        headerName: 'User info',
        colId: 'userInfo',
        flex: 0.5,
        renderCell: (params) => (
          <div style={{ whiteSpace: 'pre-wrap' }}>
            <p>{`${params.row.deliveryInfo?.name} `}</p>
            <p>
              {`${addSpacesToPhoneNumber(
                params.row.deliveryInfo?.phoneNumber
              )}`}
            </p>
            <p>{`${params.row.deliveryInfo?.address.city}, ${
              params.row.deliveryInfo?.address.street
            } ${params.row.deliveryInfo?.address.houseNumber} ${
              params.row.deliveryInfo?.address?.apartment
                ? ',' + params.row.deliveryInfo?.address.apartment
                : ''
            }`}</p>
          </div>
        ),
      },
    ],
    [handleCancelClick, handleEditClick, handleSaveClick, rowModesModel]
  );

  return (
    <>
      <AppDataGridTable
        columns={columns}
        rows={orders}
        loading={isLoading}
        error={error}
        editMode="row"
        // getRowHeight={() => 'auto'}
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        processRowUpdate={updateRow}
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
        rowHeight={100}
        pageSize={10}
      />
    </>
  );
};

CourierOrdersTable.propTypes = CourierOrdersTablePropTypes;
