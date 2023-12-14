// import { useEffect } from 'react';

import { PageTitle } from '@/components/PageTitle/PageTitle';
import { useUnreadNotifications } from '@/hooks/notifications/useUnreadNotifications';
import { Main } from '@/shared/Main/Main';

const NotificationsPage = () => {
  const { data } = useUnreadNotifications();
  console.log(data);
  return (
    <Main>
      <>
        <PageTitle>NOTIFICATIONS</PageTitle>
      </>
    </Main>
  );
};

export default NotificationsPage;
