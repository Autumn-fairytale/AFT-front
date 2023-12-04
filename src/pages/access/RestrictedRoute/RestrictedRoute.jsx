import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { route } from '@/constants';
import { selectIsAuth, selectRoles } from '@/redux/auth/selectors';
import { Main } from '@/shared/Main/Main';
import { RestrictedRoutePropTypes } from './RestrictedRoute.props';

const RestrictedRoute = ({ redirectLink, role }) => {
  const location = useLocation();
  const state = { from: location.state?.from || location };
  const to = location.state?.from || redirectLink;

  const isAuth = useSelector(selectIsAuth);
  const roles = useSelector(selectRoles);

  const isAccessRole = roles.includes(role);

  if (!isAuth && role)
    return <Navigate to={route.SIGN_IN} state={state} replace={true} />;

  if (isAuth && (!role || isAccessRole))
    return <Navigate to={to} state={state} replace={true} />;

  return (
    <Suspense fallback={<Main>Loading...</Main>}>
      <Outlet />
    </Suspense>
  );
};

RestrictedRoute.propTypes = RestrictedRoutePropTypes;

export default RestrictedRoute;
