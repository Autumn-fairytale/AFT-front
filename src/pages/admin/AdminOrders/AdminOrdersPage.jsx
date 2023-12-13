import { Box } from '@mui/material';

import { AllOrdersTable } from '@/components/AllOrdersTable';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import useGetAllOrders from '@/hooks/admin/useGetAllOrders';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const AdminOrdersPage = () => {
  const { data, isLoading, error } = useGetAllOrders();
  return (
    <Main>
      <AppContainer>
        <PageTitle>ALL ORDERS</PageTitle>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '20px 0px',
          }}
        >
          <AllOrdersTable
            data={data}
            isLoading={isLoading}
            error={error}
            tableHeight={'85vMin'}
          />
        </Box>
      </AppContainer>
    </Main>
  );
};

export default AdminOrdersPage;
