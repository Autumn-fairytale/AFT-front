import { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { GridRowEditStopReasons, GridRowModes } from '@mui/x-data-grid';

import { chefsAmountAfterFee } from '@/helpers';
import { selectUser } from '@/redux/auth/selectors';
// import useChefOrder from '@/hooks/useChefOrders';
import AppDataGridTable from '@/shared/AppDataGridTable/AppDataGridTable';
import { formatDateForDataGrid } from '../../helpers/formatDateForDataGrid';
import { CustomPagination } from '../TableComponents/Pagination';
import { StatusCell } from '../TableComponents/StatusCell';
import { ChefOrdersTablePropTypes } from './ChefOrdersTable.props';
import { getActions } from './getActions';
import { getStatusOptions } from './getChefStatusOptions';
import { OrderItemsCell } from './OrderItemsCell';
import { processRowUpdate } from './processRowUpdate';

export const ChefOrdersTable = ({ getOrders, status }) => {
  const user = useSelector(selectUser);
  const chefID = user.roles.find((role) => role.name === 'chef').id;
  //'656cff4d4125411c58aec41d';
  //const { data, isLoading, error } = useChefOrder(chefID);

  const { data, isLoading, error } = getOrders(chefID, status);

  const orders = data ? data : [];
  // console.log(orders);
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
        field: 'totalPrice',
        headerName: 'Your Profit',
        valueGetter: ({ value }) => {
          return chefsAmountAfterFee(value) + ' ₴';
        },
        cellClassName: 'boldCell',
        width: 200,
      },

      {
        field: 'items',
        headerName: 'Order items',
        width: 250,
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
        // tableHeight="85vMin"
        tableHeight="auto"
        pageSize={10}
      />
    </>
  );
};

ChefOrdersTable.propTypes = ChefOrdersTablePropTypes;
