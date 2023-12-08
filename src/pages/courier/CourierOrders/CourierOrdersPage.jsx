import { Box, Typography } from '@mui/material';

import { CourierOrdersTable } from '@/components/CourierOrdersTable';
import useCourierOrder from '@/hooks/courier/useCourierOrders';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const CourierOrdersPage = () => {
  const { data, isLoading, error } = useCourierOrder();
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
            margin: '10px 0',
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
