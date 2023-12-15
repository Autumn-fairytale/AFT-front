import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { Box } from '@mui/material';

import { NotificationsTable } from '@/components/NotificationsTable/NotificationsTable';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const NotificationsPage = () => {
  useEffect(() => {
    toast.dismiss();
  }, []);

  return (
    <Main>
      <Box component="section" sx={{ flexGrow: 1 }}>
        <AppContainer
          sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <PageTitle>NOTIFICATIONS</PageTitle>

          <NotificationsTable />
        </AppContainer>
      </Box>
    </Main>
  );
};

export default NotificationsPage;
