/* eslint-disable react/jsx-key */
import { useState } from 'react';

import CancelIcon from '@mui/icons-material/Close';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LaunchIcon from '@mui/icons-material/Launch';
import SaveIcon from '@mui/icons-material/Save';
import { IconButton, Paper, Stack } from '@mui/material';
import {
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridRowModes,
} from '@mui/x-data-grid';

import useChefOrder from '@/hooks/useChefOrders';
import AppChip from '@/shared/AppChip/AppChip';
import AppDataGridTable from '@/shared/AppDataGridTable/AppDataGridTable';
import { AppModal } from '@/shared/AppModal/AppModal';
import { formatDateForDataGrid } from '../UsersOrdersTable/formatDateForDataGrid';
import { CustomPagination } from '../UsersOrdersTable/Pagination';
import { getStatusOptions } from './getChefsStatusOptions';

export const ChefsOrdersTable = () => {
  const chefID = '6557219bccbbbbc3695bc8b2';
  const { data, isLoading, error } = useChefOrder(chefID);

  const orders = data ?? [];
  const [openModal, setOpenModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [rowModesModel, setRowModesModel] = useState({});

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    setOpenModal(true);
  };

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View },
    });
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };

  const processRowUpdate = (newRow, oldRow) => {
    if (newRow.status !== oldRow.status) {
      console.log('server');
    }

    // const updatedRow = { ...newRow, isNew: false };
    // setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return newRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

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
    {
      field: 'createdAt',
      headerName: 'Created at',
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
      valueOptions: (params) => getStatusOptions(params.row.status),
      renderCell: (params) => (
        <AppChip status={params.value} sx={{ width: 110 }} />
      ),
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Edit',
      width: 75,
      cellClassName: 'actions',
      getActions: ({ id, row }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        const isEditableStatus = !['completed', 'canceled'].includes(
          row.status
        );

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditOutlinedIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
            disabled={!isEditableStatus}
          />,
        ];
      },
    },
    { field: 'totalPrice', headerName: 'Total Price', type: 'number' },

    {
      field: 'items',
      headerName: 'Order items',
      flex: 1,
      renderCell: (params) => {
        return (
          <Stack spacing={1}>
            {params.value.map((item, index) => (
              <Paper
                key={index}
                variant="body2"
                sx={{
                  padding: '4px',
                  backgroundColor: (theme) => theme.palette.primary.main,
                  color: 'white',
                }}
              >
                {`${index + 1}: ${item.name}, PSC: ${item.count}`}
              </Paper>
            ))}
          </Stack>
        );
      },
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
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        processRowUpdate={processRowUpdate}
        onRowEditStop={handleRowEditStop}
        slots={{ pagination: CustomPagination }}
        getRowHeight={() => 'auto'}
        sx={{
          '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
            py: '15px',
          },
        }}
      />
      <AppModal open={openModal} onClose={() => setOpenModal(false)}>
        {selectedOrder && 'Cat'}
      </AppModal>
    </>
  );
};
