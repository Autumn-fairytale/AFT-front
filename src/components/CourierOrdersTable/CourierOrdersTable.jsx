import { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { GridRowEditStopReasons, GridRowModes } from '@mui/x-data-grid';

import { selectUser } from '@/redux/auth/selectors';
import AppDataGridTable from '@/shared/AppDataGridTable/AppDataGridTable';
import { formatDateForDataGrid } from '../../helpers/formatDateForDataGrid';
import { CustomPagination } from '../TableComponents/Pagination';
import { StatusCell } from '../TableComponents/StatusCell';
import { CourierOrdersTablePropTypes } from './ChefOrdersTable.props';
import { getActions } from './getActions';
import { getStatusOptions } from './getCourierStatusOptions';
import { processRowUpdate } from './processRowUpdate';

export const CourierOrdersTable = ({ getOrders, status, tableHeight }) => {
  const user = useSelector(selectUser);
  const prop = status
    ? status
    : user.roles.find((role) => role.name === 'courier').id;
  const { data, isLoading, error } = getOrders(prop);
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
    return processRowUpdate(newRow, oldRow);
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
          return value?.delivery + ' ₴';
        },
        cellClassName: 'boldCell',
        width: 200,
      },
      {
        field: 'deliveryInfo',
        colId: 'address',
        valueGetter: ({ value }) => {
          if (!value) {
            return value;
          }
          const address = `${value.address.country}, ${value.address.city}, 
              ${value.address.street} ${value.address.houseNumber} 
              ${value.address.apartment ? ', ' + value.address.apartment : ''}`;
          return address;
        },
        headerName: 'Address',
        flex: 0.5,
        width: 200,
      },
      {
        field: 'userInfo',
        valueGetter: (row) => {
          if (!row) {
            return row;
          }
          const userInfo = `${row.row.deliveryInfo?.name}, ${row.row.deliveryInfo?.phoneNumber}`;
          return userInfo;
        },
        headerName: 'User info',
        colId: 'userInfo',
        flex: 0.5,
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
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        processRowUpdate={updateRow}
        onRowEditStop={handleRowEditStop}
        slots={{ pagination: CustomPagination }}
        getRowHeight={() => 'auto'}
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
      />
    </>
  );
};

CourierOrdersTable.propTypes = CourierOrdersTablePropTypes;
