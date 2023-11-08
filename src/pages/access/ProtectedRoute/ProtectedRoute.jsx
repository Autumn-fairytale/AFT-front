import { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ProtectedRoutePropTypes } from './ProtectedRoute.props';

const ProtectedRoute = ({ authRedirectLink, accessRedirectLink, role }) => {
  // Stores the URL of the current route. This variable is intended to redirect to the current page after login or registration.
  const location = useLocation();

  // Mock user data
  const user = { isAuth: true, roles: ['user', 'courier', '', ''] };

  const isAuth = user.isAuth;
  const isAccessByRole = user.roles.includes(role);

  if (!isAuth)
    return (
      <Navigate to={authRedirectLink} state={{ from: location }} replace />
    );

  if (!isAccessByRole)
    return (
      <Navigate to={accessRedirectLink} state={{ from: location }} replace />
    );

  return (
    <Suspense fallback="Loading...">
      <Outlet />
    </Suspense>
  );
};

ProtectedRoute.propTypes = ProtectedRoutePropTypes;

export default ProtectedRoute;
