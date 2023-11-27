import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/Footer/Footer';
import { Main } from '@/shared/Main/Main';

const AppLayout = () => {
  return (
    <>
      {/* <header></header> */}

      <Suspense fallback={<Main>Loading...</Main>}>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
};

export default AppLayout;
