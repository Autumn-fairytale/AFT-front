import { Divider } from '@mui/material';

import { route } from '@/constants/route';
import { CustomLink } from '../CustomLink/CustomLink';
import { Navigation } from './NavigateMenu.styled';

// const user = { isAuth: true, roles: ['user', 'chef', 'admin', 'courier'] };
const user = { isAuth: true, roles: ['user', 'chef', 'courier', ''] };

export const NavigateMenu = () => {
  return (
    <Navigation>
      {!user.roles.includes('admin') && (
        <>
          <CustomLink to={'/'}>Home</CustomLink>
          <CustomLink to={route.DISHES}>Dishes</CustomLink>
          <CustomLink to={route.CHEFS}>Chefs</CustomLink>
        </>
      )}
      {user.isAuth && (
        <CustomLink to={route.CREATE_ORDER}>Create order</CustomLink>
      )}

      {user.isAuth &&
        !user.roles.includes('chef') &&
        !user.roles.includes('admin') && (
          <CustomLink to={route.CHEF_SIGN_UP}>Become a chef</CustomLink>
        )}
      {user.isAuth &&
        !user.roles.includes('courier') &&
        !user.roles.includes('admin') && (
          <CustomLink to={route.COURIER_SIGN_UP}>Become a courier</CustomLink>
        )}
      {user.isAuth && user.roles.includes('chef') && (
        <>
          <Divider />

          <h5>CHEF</h5>
          <CustomLink to={route.CHEF_ACCOUNT}>Dashboard</CustomLink>
          <CustomLink to={route.CHEF_PROFILE}>Profile</CustomLink>
          <CustomLink to={route.CHEF_ORDERS}>Orders</CustomLink>
          <CustomLink to={route.CHEF_DISHES}>Dishes</CustomLink>
          <CustomLink to={route.CHEF_CREATE_DISH}>Create dish</CustomLink>
        </>
      )}
      {user.isAuth && user.roles.includes('courier') && (
        <>
          <Divider />
          <h5>COURIER</h5>
          <CustomLink to={route.COURIER_ACCOUNT}>Dashboard</CustomLink>
          <CustomLink to={route.COURIER_PROFILE}>Profile</CustomLink>
          <CustomLink to={route.COURIER_ORDERS}>Orders</CustomLink>
        </>
      )}
      {user.isAuth && user.roles.includes('admin') && (
        <>
          <CustomLink to={route.ADMIN}>Dashboard</CustomLink>
          <CustomLink to={route.ADMIN_CHEFS}>Chefs</CustomLink>
          <CustomLink to={route.ADMIN_DISHES}>Dishes</CustomLink>
          <CustomLink to={route.ADMIN_ORDERS}>Orders</CustomLink>
        </>
      )}
    </Navigation>
  );
};

// export const route = Object.freeze({
//   SIGN_IN: '/sign-in', done!!!!!!
//   SIGN_UP: '/sign-up', done!!!!!!
//   HOME: '/', done!!!!!!
//   DISHES: '/dishes', done!!!!!
//   CHEFS: '/chefs', done!!!!!!
//   CREATE_ORDER: '/create-order', done!!!!!!
//   CHEF_ACCOUNT: '/chef-account',done!!!!!!
//   CHEF_SIGN_UP: '/chef-account/sign-up', done!!!!!!
//   CHEF_PROFILE: '/chef-account/profile',done!!!!!!
//   CHEF_ORDERS: '/chef-account/orders', done!!!!!!
//   CHEF_DISHES: '/chef-account/dishes', done!!!!!!
//   CHEF_CREATE_DISH: '/chef-account/dishes/create',done!!!!!!
//   COURIER_ACCOUNT: '/courier-account',done!!!!
//   COURIER_SIGN_UP: '/courier-account/sign-up', done!!!!!!
//   COURIER_PROFILE: '/courier-account/profile', done!!!!!!
//   COURIER_ORDERS: '/courier-account/orders',done!!!!!!
//   ADMIN: '/admin', done!!!!!!
//   ADMIN_CHEFS: '/admin/chefs', done!!!!!!
//   ADMIN_DISHES: '/admin/dishes', done!!!!!!
//   ADMIN_ORDERS: '/admin/orders', done!!!!!!
//   ACCESS_DENIED: '/access-denied',
// });
