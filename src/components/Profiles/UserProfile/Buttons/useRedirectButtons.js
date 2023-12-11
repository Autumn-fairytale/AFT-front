import { useSelector } from 'react-redux';

import { route } from '@/constants';
import { role } from '@/constants/role';
import { selectRoles } from '@/redux/auth/selectors';

export const useRedirectButtons = () => {
  const userRoles = useSelector(selectRoles);

  const isChef = userRoles.includes(role.CHEF);
  const isCourier = userRoles.includes(role.COURIER);

  const redirectButtons = [
    {
      label: isChef ? 'Chef Account' : 'Become a Chef',
      route: isChef ? route.CHEF_ACCOUNT : route.CHEF_SIGN_UP,
      condition: isChef,
    },
    {
      label: isCourier ? 'Courier Account' : 'Become a Courier',
      route: isCourier ? route.COURIER_ACCOUNT : route.COURIER_SIGN_UP,
      condition: isCourier,
    },
    {
      label: 'Order History',
      route: route.USER_ORDERS,
      condition: true,
    },
    {
      label: 'Notifications',
      onClick: () => {},
    },
    {
      label: 'Settings',
      onClick: () => {},
    },
  ];
  return { redirectButtons };
};
