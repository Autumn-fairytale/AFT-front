import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, List, ListItem, Typography } from '@mui/material';

import { route } from '@/constants/route';
import { signOut } from '@/redux/auth/operations';
import { selectIsAuth, selectRoles, selectUser } from '@/redux/auth/selectors';
import { CustomLink } from '../CustomLink/CustomLink';
import { IconButtonStyled } from '../UserMenu/UserMenu.slyled';
import { NavigateMenuPropTypes } from './NavigateMenu.props';
import {
  LogoAndButtonWrapper,
  Navigation,
  NavigationWrapper,
} from './NavigateMenu.styled';

import Logo from '../../assets/images/logo.svg';

export const NavigateMenu = ({ onClose, onOpen }) => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const isAuth = useSelector(selectIsAuth);

  const roles = useSelector(selectRoles);

  return (
    <NavigationWrapper onClick={onClose()} onKeyDown={onOpen()}>
      <LogoAndButtonWrapper>
        <img src={Logo} alt="logo" style={{ maxWidth: 100 }} />
        {isAuth && (
          <IconButtonStyled
            onClick={() => {
              if (isAuth) {
                dispatch(signOut());
                toast.success('You have successfully signed out');
              }
            }}
          >
            <LogoutIcon sx={{ width: 30, height: 30 }} />
          </IconButtonStyled>
        )}
      </LogoAndButtonWrapper>
      <Navigation>
        <List>
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

            {user && isAuth && !roles.includes('admin') && (
              <>
                <ListItem>
                  <CustomLink to={route.USER_ORDERS}>Orders</CustomLink>
                </ListItem>
                <ListItem>
                  <CustomLink to={route.FAVORITE_DISHES}>
                    Favorites dishes
                  </CustomLink>
                </ListItem>
                <ListItem>
                  <CustomLink to={route.FAVORITE_CHEFS}>
                    Favorites chefs
                  </CustomLink>
                </ListItem>
              </>
            )}
          </>

          <>
            {user &&
              isAuth &&
              !roles.includes('chef') &&
              !roles.includes('admin') && <Divider />}
            {user && isAuth && !roles.includes('courier') && <Divider />}
            {user &&
              isAuth &&
              !roles.includes('chef') &&
              !roles.includes('admin') && (
                <>
                  <ListItem>
                    <CustomLink to={route.CHEF_SIGN_UP}>
                      Become a chef
                    </CustomLink>
                  </ListItem>
                </>
              )}
            {user &&
              isAuth &&
              !roles.includes('courier') &&
              !roles.includes('admin') && (
                <>
                  <ListItem>
                    <CustomLink to={route.COURIER_SIGN_UP}>
                      Become a courier
                    </CustomLink>
                  </ListItem>
                </>
              )}
            {user &&
              isAuth &&
              !roles.includes('chef') &&
              !roles.includes('admin') && <Divider />}
            {user &&
              isAuth &&
              !roles.includes('courier') &&
              !roles.includes('admin') && <Divider />}
          </>
        </List>

        {user &&
          isAuth &&
          roles.includes('chef') &&
          roles.includes('courier') && <Divider />}
        {user && isAuth && roles.includes('chef') && (
          <>
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
        {user && isAuth && roles.includes('courier') && (
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
        {user && isAuth && roles.includes('admin') && (
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
                <CustomLink to={route.ADMIN_COURIERS}>Couriers</CustomLink>
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
        {!user && <Divider />}
        {!isAuth && (
          <List>
            <ListItem>
              <CustomLink to={route.SIGN_UP}>Sign up</CustomLink>
            </ListItem>
            <ListItem>
              <CustomLink to={route.SIGN_IN}>Sign in</CustomLink>
            </ListItem>
          </List>
        )}
      </Navigation>
    </NavigationWrapper>
  );
};

NavigateMenu.propTypes = NavigateMenuPropTypes;
