import { useMemo, useState } from 'react';

import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import { Avatar, Chip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { format } from 'date-fns';

import { getChefs } from '@/api/chef/getChefs';
import { ActionSeeCert } from '@/pages/admin/AdminChefs/ActionSeeCert';
import ChefsActions from '@/pages/admin/AdminChefs/ChefActions';
import { useQuery } from '@tanstack/react-query';
import { StatusWrapper } from './AdminChefTable.styled';

function getFullName({ row: { userId } }) {
  return `${userId.firstName || ''} ${userId.lastName || ''}`;
}
const LIMIT = 15;

export const AdminChefTable = () => {
  const [rowId, setRowId] = useState(null);

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: LIMIT,
  });

  const fetchChefs = async ({ page, pageSize }) => {
    const res = await getChefs({
      pageParam: page + 1,
      limit: pageSize,
    });
    return res;
  };

  const { data } = useQuery({
    queryKey: ['chefs', 'admin', paginationModel.page + 1],
    queryFn: () => fetchChefs(paginationModel),
  });

  const rows = data?.mappedChefs;
  console.log(data);
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
        width: 180,
        valueGetter: getFullName,
      },
      {
        field: 'phoneNumber',
        headerName: 'Phone number',
        width: 140,
        valueGetter: ({ row: { phoneNumber } }) => phoneNumber,
      },
      {
        field: 'accountStatus',
        headerName: 'Accaunt Status',
        width: 130,

        renderCell: ({ row: { accountStatus } }) => {
          switch (accountStatus) {
            case 'pending':
              return (
                <Chip
                  label="penging"
                  color="primary"
                  sx={{ color: 'black', width: '100%' }}
                />
              );
            case 'blocked':
              return (
                <Chip
                  label="blocked"
                  color="secondary"
                  variant="outlined"
                  sx={{ width: '100%' }}
                />
              );
            case 'verified':
              return (
                <Chip
                  label="verified"
                  color="success"
                  sx={{ color: 'white', width: '100%' }}
                />
              );
            case 'rejected':
              return (
                <Chip
                  label="rejected"
                  color="error"
                  sx={{ color: 'white', width: '100%' }}
                />
              );

            default:
              return (
                <Chip
                  label="n/a"
                  color="secondary"
                  variant="outlined"
                  sx={{ width: '100%' }}
                />
              );
          }
        },
      },

      {
        field: 'availableStatus',
        headerName: 'Active',
        width: 60,
        renderCell: ({ row: { isAvailable } }) => (
          <StatusWrapper>
            {isAvailable === 'non-active' ? (
              <ClearIcon color="error" />
            ) : (
              <DoneIcon color="primary" />
            )}
          </StatusWrapper>
        ),
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
        field: 'certificate',
        headerName: 'Сert.',
        width: 30,
        renderCell: (params) => (
          <ActionSeeCert {...{ params, rowId, setRowId }} />
        ),

        sortable: false,
        filterable: false,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        width: 150,
        type: 'actions',
        renderCell: (params) => (
          <ChefsActions {...{ params, rowId, setRowId }} />
        ),
      },
    ],
    [rowId]
  );

  return (
    <div>
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
          pageSize={LIMIT}
          pageSizeOptions={[LIMIT]}
          rowCount={data.pageInfo.total}
          paginationModel={paginationModel}
          paginationMode="server"
          onPaginationModelChange={setPaginationModel}
        />
      )}
    </div>
  );
};
