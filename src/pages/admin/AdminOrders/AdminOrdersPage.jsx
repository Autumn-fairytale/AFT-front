import { Box } from '@mui/material';

import { AllOrdersTable } from '@/components/AllOrdersTable';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const AdminOrdersPage = () => {
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
          <AllOrdersTable tableHeight={'200vMin'} />
        </Box>
      </AppContainer>
    </Main>
  );
};

export default AdminOrdersPage;
