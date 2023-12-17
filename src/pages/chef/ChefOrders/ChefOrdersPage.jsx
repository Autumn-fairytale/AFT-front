import { Box } from '@mui/material';

import { ChefOrdersTable } from '@/components/ChefOrdersTable';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import useChefOrder from '@/hooks/chef/useChefOrders';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const ChefOrdersPage = () => {
  const { data, isLoading, error } = useChefOrder();
  return (
    <Main style={{ display: 'flex', justifyContent: 'center' }}>
      <AppContainer>
        <PageTitle>ORDERS</PageTitle>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '20px 0px',
          }}
        >
          <ChefOrdersTable
            data={data}
            error={error}
            isLoading={isLoading}
            tableHeight="auto"
            //tableHeight="100vMin"
          />
        </Box>
      </AppContainer>
    </Main>
  );
};

export default ChefOrdersPage;
