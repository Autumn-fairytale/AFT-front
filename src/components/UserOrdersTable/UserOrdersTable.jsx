import { useMemo, useState } from 'react';

import { Box } from '@mui/material';

import useUserOrders from '@/hooks/useUserOrders ';
import { CustomFooter } from './CustomFooter';
import { userOrdersTableColumns } from './UserOrdersColumns';
import { UserOrdersTableStyled } from './UserOrdersTable.styled';
import UserOrdersTableNoData from './UserOrdersTableNoData/UserOrdersTableNoData';

export const UserOrdersTable = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const { data, isLoading, error } = useUserOrders(paginationModel);

  const orders = useMemo(() => data?.orders || [], [data?.orders]);
  const rowCount = useMemo(() => data?.totalCount || 0, [data?.totalCount]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '20px',
      }}
    >
      <UserOrdersTableStyled
        tableProps={{ minHeight: '400px', flexGrow: 1 }}
        columns={userOrdersTableColumns}
        rows={orders}
        loading={isLoading}
        error={error}
        disableColumnMenu={true}
        disableColumnFilter={true}
        disableColumnSelector={true}
        rowHeight={60}
        rowCount={rowCount}
        height="100%"
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        slots={{
          footer: () => (
            <CustomFooter totalSum={data?.totalPrice} rowCount={rowCount} />
          ),
          noRowsOverlay: UserOrdersTableNoData,
        }}
        initialState={{
          pagination: { paginationModel },
        }}
      />
    </Box>
  );
};
