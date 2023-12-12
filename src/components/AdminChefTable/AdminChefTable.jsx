import { useMemo } from 'react';

import { Avatar } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { format } from 'date-fns';

import { getChefs } from '@/api/chef/getChefs';
import { useQuery } from '@tanstack/react-query';

function getFullName({ row: { userId } }) {
  return `${userId.firstName || ''} ${userId.lastName || ''}`;
}

export const AdminChefTable = () => {
  const columns = useMemo(
    () => [
      {
        field: 'photoURL',
        headerName: 'Avatar',
        width: 60,
        valueGetter: ({ row: { avatar } }) => avatar,
        renderCell: ({ row: { avatar } }) => <Avatar src={avatar} />,
        sortable: false,
        filterable: false,
      },
      {
        field: 'fullName',
        headerName: 'Full name',
        width: 170,
        valueGetter: getFullName,
      },
      {
        field: 'phoneNumber',
        headerName: 'Phone number',
        width: 200,
        valueGetter: ({ row: { phoneNumber } }) => phoneNumber,
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 100,
        valueGetter: ({ row: { isAvailable } }) => isAvailable,
      },
      {
        field: 'createdAt',
        headerName: 'Created At',
        width: 200,
        valueGetter: ({ row: { createdAt } }) =>
          format(new Date(createdAt), 'dd/MM/yyyy HH:MM:SS'),
      },
      {
        field: '_id',
        headerName: 'Id',
        width: 220,
        valueGetter: ({ row }) => row.id,
        sortable: false,
        filterable: false,
      },
    ],
    []
  );
  const { data } = useQuery({
    queryKey: ['chefs', 'admin'],
    queryFn: getChefs,
  });

  const rows = data?.mappedChefs;
  console.log('rows:', rows);

  return (
    <div>
      AdminChefTable
      {data && (
        <DataGrid rows={rows} columns={columns} getRowId={(row) => row.id} />
      )}
    </div>
  );
};
