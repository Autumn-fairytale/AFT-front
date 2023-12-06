import { Box, Typography } from '@mui/material';

import { ChefOrdersTable } from '@/components/ChefOrdersTable';
import useChefOrder from '@/hooks/useChefOrders';
import { Main } from '@/shared/Main/Main';

const ChefOrdersPage = () => {
  return (
    <Main style={{ display: 'flex', justifyContent: 'center' }}>
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
          margin: '10px',
        }}
      >
        <ChefOrdersTable getOrders={useChefOrder} />
      </Box>
    </Main>
  );
};

export default ChefOrdersPage;
