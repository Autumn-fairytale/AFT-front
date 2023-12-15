import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Box } from '@mui/material';

import { NotificationsTable } from '@/components/NotificationsTable';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { disableToasts, enableToasts } from '@/redux/notifications';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const NotificationsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(disableToasts());
    return () => {
      dispatch(enableToasts());
    };
  }, [dispatch]);

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
