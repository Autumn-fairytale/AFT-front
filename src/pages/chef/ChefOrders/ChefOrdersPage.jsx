import { Box, Typography } from '@mui/material';

import { ChefOrdersTable } from '@/components/ChefOrdersTable';
import useChefOrder from '@/hooks/chef/useChefOrders';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const ChefOrdersPage = () => {
  const { data, isLoading, error } = useChefOrder();
  return (
    <Main style={{ display: 'flex', justifyContent: 'center' }}>
      <AppContainer>
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            marginTop="10px"
            marginBottom="10px"
            fontSize="28px"
            fontWeight="600"
          >
            Orders
          </Typography>
        </Box>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '20px 60px',
          }}
        >
          <ChefOrdersTable
            data={data}
            error={error}
            isLoading={isLoading}
            tableHeight="85vMin"
          />
        </Box>
      </AppContainer>
    </Main>
  );
};

export default ChefOrdersPage;
