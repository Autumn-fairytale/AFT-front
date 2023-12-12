import { useMemo, useState } from 'react';

import { Avatar } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { format } from 'date-fns';

import { getChefs } from '@/api/chef/getChefs';
import ChefsActions from '@/pages/admin/AdminChefs/ChefActions';
import { useQuery } from '@tanstack/react-query';

function getFullName({ row: { userId } }) {
  return `${userId.firstName || ''} ${userId.lastName || ''}`;
}

export const AdminChefTable = () => {
  const [rowId, setRowId] = useState(null);
  console.log('rowId:', rowId);

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
        width: 150,
        valueGetter: ({ row: { phoneNumber } }) => phoneNumber,
      },
      {
        field: 'accountStatus',
        headerName: 'Accaunt Status',
        width: 100,
        valueGetter: ({ row: { accountStatus } }) => accountStatus,
      },
      {
        field: 'availableStatus',
        headerName: 'Available status',
        width: 100,
        valueGetter: ({ row: { isAvailable } }) => isAvailable,
      },
      {
        field: 'createdAt',
        headerName: 'Created At',
        width: 150,
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
      {
        field: 'actions',
        headerName: 'Actions',
        width: 200,
        type: 'actions',
        renderCell: (params) => (
          <ChefsActions {...{ params, rowId, setRowId }} />
        ),
      },
    ],
    [rowId]
  );
  const { data } = useQuery({
    queryKey: ['chefs', 'admin'],
    queryFn: getChefs,
  });

  const rows = data?.mappedChefs;

  return (
    <div>
      AdminChefTable
      {data && (
        <DataGrid
          rows={rows}
          columns={columns}
          editMode="row"
          getRowId={(row) => row.id}
          initialState={{
            sorting: {
              sortModel: [{ field: 'createdAt', sort: 'desc' }],
            },
          }}
        />
      )}
    </div>
  );
};
