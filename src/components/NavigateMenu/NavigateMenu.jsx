import { useSelector } from 'react-redux';

import { Divider, List, ListItem, Typography } from '@mui/material';

import { route } from '@/constants/route';
import { selectIsAuth, selectUser } from '@/redux/auth/selectors';
import { CustomLink } from '../CustomLink/CustomLink';
import { Navigation } from './NavigateMenu.styled';

// const user = { isAuth: true, roles: ['user', 'chef', 'admin', 'courier'] };
// const user = { isAuth: true, roles: ['user', 'chef', 'courier', ''] };

export const NavigateMenu = () => {
  const user = useSelector(selectUser);
  console.log('user:', user);
  const isAuth = useSelector(selectIsAuth);
  console.log('isAuth:', isAuth);

  return (
    <Navigation>
      <List>
        {(!user || !user.roles.includes('admin')) && (
          <>
            <ListItem>
              <CustomLink to={'/'}>Home</CustomLink>
            </ListItem>
            <ListItem>
              <CustomLink to={route.DISHES}>Dishes</CustomLink>
            </ListItem>
            <ListItem>
              <CustomLink to={route.CHEFS}>Chefs</CustomLink>
            </ListItem>
          </>
        )}
        {user && isAuth && !user.roles.includes('admin') && (
          <ListItem>
            <CustomLink to={route.CREATE_ORDER}>Create order</CustomLink>
          </ListItem>
        )}

        {user &&
          isAuth &&
          !user.roles.includes('chef') &&
          !user.roles.includes('admin') && (
            <ListItem>
              <CustomLink to={route.CHEF_SIGN_UP}>Become a chef</CustomLink>
            </ListItem>
          )}
        {user &&
          isAuth &&
          !user.roles.includes('courier') &&
          !user.roles.includes('admin') && (
            <ListItem>
              <CustomLink to={route.COURIER_SIGN_UP}>
                Become a courier
              </CustomLink>
            </ListItem>
          )}
      </List>
      {user && isAuth && user.roles.includes('chef') && (
        <>
          <Divider />

          <Typography variant="h6" align="center" sx={{ fontWeight: '600' }}>
            CHEF
          </Typography>
          <List>
            <ListItem>
              <CustomLink to={route.CHEF_ACCOUNT}>Dashboard</CustomLink>
            </ListItem>
            <ListItem>
              <CustomLink to={route.CHEF_PROFILE}>Profile</CustomLink>
            </ListItem>
            <ListItem>
              <CustomLink to={route.CHEF_ORDERS}>Orders</CustomLink>
            </ListItem>
            <ListItem>
              <CustomLink to={route.CHEF_DISHES}>Dishes</CustomLink>
            </ListItem>
            <ListItem>
              <CustomLink to={route.CHEF_CREATE_DISH}>Create dish</CustomLink>
            </ListItem>
          </List>
        </>
      )}
      {user && isAuth && user.roles.includes('courier') && (
        <>
          <Divider />
          <Typography variant="h6" align="center" sx={{ fontWeight: '600' }}>
            COURIER
          </Typography>
          <List>
            <ListItem>
              <CustomLink to={route.COURIER_ACCOUNT}>Dashboard</CustomLink>
            </ListItem>
            <ListItem>
              <CustomLink to={route.COURIER_PROFILE}>Profile</CustomLink>
            </ListItem>
            <ListItem>
              <CustomLink to={route.COURIER_ORDERS}>Orders</CustomLink>
            </ListItem>
          </List>
        </>
      )}
      {user && isAuth && user.roles.includes('admin') && (
        <>
          <Typography variant="h6" align="center" sx={{ fontWeight: '600' }}>
            ADMIN
          </Typography>
          <List>
            <ListItem>
              <CustomLink to={route.ADMIN}>Dashboard</CustomLink>
            </ListItem>
            <ListItem>
              <CustomLink to={route.ADMIN_CHEFS}>Chefs</CustomLink>
            </ListItem>
            <ListItem>
              <CustomLink to={route.ADMIN_DISHES}>Dishes</CustomLink>
            </ListItem>
            <ListItem>
              <CustomLink to={route.ADMIN_ORDERS}>Orders</CustomLink>
            </ListItem>
          </List>
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
