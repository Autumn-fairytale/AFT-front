import { useMemo, useState } from 'react';
import { PiBicycle, PiCar, PiMotorcycle } from 'react-icons/pi';
import { RxValueNone } from 'react-icons/rx';

import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import { Avatar, Chip } from '@mui/material';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { format } from 'date-fns';

import { getCouriers } from '@/api/admin/getCouriers';
import { addSpacesToPhoneNumber } from '@/helpers';
import { useQuery } from '@tanstack/react-query';
import CourierActions from './CourierActions';

const LIMIT = 15;

export const AdminCourierTable = () => {
  const [rowId, setRowId] = useState(null);

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: LIMIT,
  });

  const fetchCouriers = async ({ page, pageSize }) => {
    const res = await getCouriers({
      pageParam: page + 1,
      limit: pageSize,
    });
    return res;
  };

  const { data } = useQuery({
    queryKey: ['couriers', 'admin', paginationModel.page + 1],
    queryFn: () => fetchCouriers(paginationModel),
  });

  const rows = data?.couriers;
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
        field: 'userId',
        headerName: 'Full name',
        colId: 'courierInfo',
        flex: 0.5,
        renderCell: (params) => (
          <div style={{ whiteSpace: 'pre-wrap' }}>
            <p>
              {`${params.row.userId?.firstName} ${params.row.userId?.lastName}`}
            </p>
          </div>
        ),
      },
      {
        field: 'phoneNumber',
        headerName: 'Phone number',
        width: 160,
        valueGetter: ({ row: { phoneNumber } }) =>
          phoneNumber ? addSpacesToPhoneNumber(phoneNumber) : '',
      },
      {
        field: 'accountStatus',
        headerName: 'Account Status',
        width: 130,

        renderCell: ({ row: { accountStatus } }) => {
          switch (accountStatus) {
            case 'pending':
              return (
                <Chip
                  label="pending"
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
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isAvailable === 'non-active' ? (
              <ClearIcon color="error" />
            ) : (
              <DoneIcon color="primary" />
            )}
          </Box>
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
        field: 'Address',
        valueGetter: (params) => {
          if (!params.value) {
            return params.value;
          }
        },
        headerName: 'Address',
        colId: 'address',
        flex: 0.5,
        width: 150,
        renderCell: (params) => (
          <div style={{ whiteSpace: 'pre-wrap' }}>
            <p>{`${params.row.address.country}, ${params.row.address.city}`}</p>
          </div>
        ),
      },
      {
        field: 'vehicleType',
        headerName: 'Vehicle type',
        width: 100,
        renderCell: ({ row: { vehicleType } }) => {
          switch (vehicleType) {
            case 'none':
              return (
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <RxValueNone fontSize="26px" />
                </Box>
              );
            case 'bicycle':
              return (
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <PiBicycle fontSize="26px" />{' '}
                </Box>
              );
            case 'motorcycle':
              return (
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <PiMotorcycle fontSize="26px" />{' '}
                </Box>
              );
            case 'car':
              return (
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <PiCar fontSize="26px" />
                </Box>
              );
          }
        },
      },

      {
        field: 'actions',
        headerName: 'Actions',
        width: 150,
        type: 'actions',
        renderCell: (params) => (
          <CourierActions {...{ params, rowId, setRowId }} />
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
      {/* {data && (
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
      )} */}
    </div>
  );
};
