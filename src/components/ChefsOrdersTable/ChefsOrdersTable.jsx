import { useCallback, useMemo, useState } from 'react';

import { GridRowEditStopReasons, GridRowModes } from '@mui/x-data-grid';

import { chefsAmountAfterFee } from '@/helpers';
import useChefOrder from '@/hooks/useChefOrders';
import AppDataGridTable from '@/shared/AppDataGridTable/AppDataGridTable';
import { formatDateForDataGrid } from '../UsersOrdersTable/formatDateForDataGrid';
import { CustomPagination } from '../UsersOrdersTable/Pagination';
import { getActions } from './getActions';
import { getStatusOptions } from './getChefsStatusOptions';
import { OrderItemsCell } from './OrderItemsCell';
import { processRowUpdate } from './processRowUpdate';
import { StatusCell } from './StatusCell';

export const ChefsOrdersTable = () => {
  const chefID = '6557219bccbbbbc3695bc8b2';
  const { data, isLoading, error } = useChefOrder(chefID);

  const orders = data ?? [];

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
    return processRowUpdate(newRow, oldRow, chefID);
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
        valueOptions: (params) => {
          return getStatusOptions(params.row.status);
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
        field: 'totalPrice',
        headerName: 'Your Profit',
        valueGetter: ({ value }) => {
          if (!value) {
            return value;
          }
          return chefsAmountAfterFee(value);
        },
        type: 'number',
      },

      {
        field: 'items',
        headerName: 'Order items',
        flex: 1,
        renderCell: OrderItemsCell,
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
      />
    </>
  );
};
