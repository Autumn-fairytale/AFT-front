import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/Footer/Footer';

const AppLayout = () => {
  return (
    <>
      {/* <header></header> */}

      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
};

export default AppLayout;
