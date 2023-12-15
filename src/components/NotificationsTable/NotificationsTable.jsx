import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { Button } from '@mui/material';

import { formatDateForDataGrid } from '@/helpers/formatDateForDataGrid';
import { useDeleteNotification } from '@/hooks/notifications';
import { useGetNotifications } from '@/hooks/notifications';
import { useMarkNotificationAsRead } from '@/hooks/notifications/useMarkNotificationAsRead';
import { setUnreadCount } from '@/redux/notifications';
import AppDataGridTable from '@/shared/AppDataGridTable/AppDataGridTable';
import { CustomPagination } from '../TableComponents/Pagination';
import { StatusCell } from '../TableComponents/StatusCell';
import { NotificationsTableProps } from './NotificationsTable.props';

export const NotificationsTable = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error, refetch } = useGetNotifications();
  const markAsRead = useMarkNotificationAsRead();
  const deleteNote = useDeleteNotification();

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (data) {
      dispatch(
        setUnreadCount(data.filter((notification) => !notification.read).length)
      );
    }
  }, [data, dispatch]);

  const notifications = data ?? [];

  const handleMarkAsRead = useCallback(
    async (id) => {
      markAsRead(id);
    },
    [markAsRead]
  );

  const handleDelete = useCallback(
    async (id) => {
      deleteNote(id);
    },
    [deleteNote]
  );

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
      { field: 'type', headerName: 'Type', width: 200 },
      {
        field: 'role',
        headerName: 'Role',
        valueGetter: ({ value }) => value.toUpperCase(),
      },

      {
        field: 'status',
        headerName: 'Status',
        headerAlign: 'center',
        align: 'center',
        hideSortIcons: true,
        sortable: false,
        width: 150,
        renderCell: ({ row: notification }) => {
          if (!notification.updateStatus) {
            notification.updateStatus = 'new';
          }
          return <StatusCell value={notification.updateStatus} />;
        },
      },
      {
        field: 'markAsRead',
        type: 'actions',
        headerName: 'Mark as Read',
        width: 150,
        getActions: (params) => [
          <Button
            key="mark"
            startIcon={<MarkEmailReadIcon style={{ fontSize: 'large' }} />}
            onClick={() => handleMarkAsRead(params.id)}
            size="large"
          >
            Mark as read
          </Button>,
        ],
      },
      {
        field: 'delete',
        type: 'actions',
        headerName: 'Delete',
        width: 150,
        getActions: (params) => [
          <Button
            key="delete"
            startIcon={<DeleteOutlineIcon style={{ fontSize: 'large' }} />}
            onClick={() => handleDelete(params.id)}
            size="large"
            color="error"
          >
            Delete
          </Button>,
        ],
      },
    ],

    [handleDelete, handleMarkAsRead]
  );

  return (
    <>
      <AppDataGridTable
        columns={columns}
        rows={notifications}
        loading={isLoading}
        error={error}
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
        tableHeight={'70vh'}
        pageSize={10}
        rowHeight={100}
      />
    </>
  );
};

NotificationsTable.propTypes = NotificationsTableProps;
