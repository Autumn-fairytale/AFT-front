// import { useEffect } from 'react';

import { PageTitle } from '@/components/PageTitle/PageTitle';
import { useGetNotifications } from '@/hooks/notifications/useGetNotifications';
import { Main } from '@/shared/Main/Main';

const NotificationsPage = () => {
  const { data } = useGetNotifications();
  data && console.log(data);
  return (
    <Main>
      <>
        <PageTitle>NOTIFICATIONS</PageTitle>
      </>
    </Main>
  );
};

export default NotificationsPage;
