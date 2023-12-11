import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { AppLoader } from '@/shared';
import { Main } from '@/shared/Main/Main';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<AppLoader />}>
          <Outlet />
        </Suspense>
      </Main>

      <Footer />
    </>
  );
};

export default AppLayout;
