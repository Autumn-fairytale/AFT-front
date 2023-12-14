import { Box } from '@mui/material';

import PageMessage from '@/components/PageMessage';

const UserOrdersTableNoData = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <PageMessage
        variant="no-data"
        message=""
        imageProps={{ width: '300px', height: '300px' }}
      />
    </Box>
  );
};

export default UserOrdersTableNoData;
