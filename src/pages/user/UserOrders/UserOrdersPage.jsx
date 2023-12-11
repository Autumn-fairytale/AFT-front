import { Box } from '@mui/material';

import { PageTitle } from '@/components/PageTitle/PageTitle';
import { UserOrdersTable } from '@/components/UserOrdersTable';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const UserOrdersPage = () => {
  return (
    <Main>
      <Box component="section" sx={{ flexGrow: 1 }}>
        <AppContainer
          sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <PageTitle>Orders</PageTitle>
          <UserOrdersTable />
        </AppContainer>
      </Box>
    </Main>
  );
};

export default UserOrdersPage;
