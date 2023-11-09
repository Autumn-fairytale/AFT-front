import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </>
  );
};

export default AppLayout;
