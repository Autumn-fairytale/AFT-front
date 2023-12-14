import { Box } from '@mui/material';

import { CourierOrdersTable } from '@/components/CourierOrdersTable';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import useCourierOrder from '@/hooks/courier/useCourierOrders';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const CourierOrdersPage = () => {
  const { data, isLoading, error } = useCourierOrder();
  return (
    <Main style={{ display: 'flex', justifyContent: 'center' }}>
      <AppContainer>
        <PageTitle>ORDERS</PageTitle>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '20px 0',
          }}
        >
          <CourierOrdersTable
            tableHeight="85vMin"
            data={data}
            error={error}
            isLoading={isLoading}
          />
        </Box>
      </AppContainer>
    </Main>
  );
};

export default CourierOrdersPage;
