import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { route } from '@/constants';

const AppLayout = () => {
  return (
    <>
      <header style={{ display: 'flex', gap: '20px' }}>
        <Link to={route.HOME}>Home</Link>
        <Link to={route.DISHES}>Dishes</Link>
        <Link to={route.CHEFS}>Chefs</Link>
        <Link to={route.CHEF_ACCOUNT}>Chef Account</Link>
        <Link to={route.CHEF_PROFILE}>Chef Profile</Link>
        <Link to={route.CHEF_ORDERS}>Chef orders</Link>
        <Link to={route.CHEF_DISHES}>Chef dishes</Link>
        <Link to={route.CHEF_CREATE_DISH}>Create dish</Link>
        <Link to={route.COURIER_ACCOUNT}>Courier account</Link>
        <Link to={route.COURIER_PROFILE}>Courier Profile</Link>
        <Link to={route.COURIER_ORDERS}>Courier orders</Link>
      </header>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </>
  );
};

export default AppLayout;
