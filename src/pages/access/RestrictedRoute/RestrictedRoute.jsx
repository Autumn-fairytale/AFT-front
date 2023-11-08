import { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { route } from '@/constants';
import { RestrictedRoutePropTypes } from './RestrictedRoute.props';

const RestrictedRoute = ({ redirectLink, role }) => {
  const location = useLocation();
  const state = { from: location.state?.from || location };
  const to = location.state?.from || redirectLink;

  // Mock user data
  const user = { isAuth: true, roles: ['user', 'chef', 'admin', ''] };

  const isAuth = user.isAuth;
  const isAccessRole = user.roles.includes(role);

  if (!isAuth && role)
    return <Navigate to={route.SIGN_IN} state={state} replace={true} />;

  if (isAuth && (!role || isAccessRole))
    return <Navigate to={to} state={state} replace={true} />;

  return (
    <Suspense fallback="Loading...">
      <Outlet />
    </Suspense>
  );
};

RestrictedRoute.propTypes = RestrictedRoutePropTypes;

export default RestrictedRoute;
