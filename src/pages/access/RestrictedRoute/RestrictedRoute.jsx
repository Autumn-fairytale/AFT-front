import { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { route } from '@/constants';
import { RestrictedRoutePropTypes } from './RestrictedRoute.props';

const RestrictedRoute = ({ redirectLink, role }) => {
  const location = useLocation();
  const to = location.state?.from || redirectLink;

  // Mock user data
  const user = { isAuth: true, roles: ['user', 'courier', '', ''] };

  const isAuth = user.isAuth;
  const isAccessRole = user.roles.includes(role);

  if (!isAuth && role)
    return <Navigate to={route.SIGN_IN} state={{ from: location }} replace />;

  if (isAuth && (!role || isAccessRole))
    return <Navigate to={to} state={{ from: location }} replace />;

  return (
    <Suspense fallback="Loading...">
      <Outlet />
    </Suspense>
  );
};

RestrictedRoute.propTypes = RestrictedRoutePropTypes;

export default RestrictedRoute;
