import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';

import { route } from '@/constants/route.js';
import { NavigateMenu } from '../NavigateMenu/NavigateMenu.jsx';
import { UserMenu } from '../UserMenu/UserMenu.jsx';
import { AppBarStyled, AppContainerStyled } from './Header.styled.js';

// import SearchBar from './searchBar.jsx';
import Logo from '../../assets/images/logo.svg';

// Mock user data
const user = { isAuth: true, roles: ['user', 'chef', 'admin', ''] };

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setState] = useState({
    left: false,
  });
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ left: open });
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBarStyled position="static">
      <AppContainerStyled>
        <Link to={route.HOME}>
          <img src={Logo} alt="logo" style={{ maxWidth: 100 }} />
        </Link>

        <Toolbar>
          {!user.isAuth && (
            <>
              <IconButton onClick={handleMenuOpen}>
                <FaUser />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {!user.isAuth && (
                  <MenuItem onClick={handleMenuClose}>
                    <Link to={route.SIGN_UP}>Sign up</Link>
                  </MenuItem>
                )}
                {!user.isAuth && (
                  <MenuItem onClick={handleMenuClose}>
                    <Link to={route.SIGN_IN}>Sign in</Link>
                  </MenuItem>
                )}
              </Menu>
            </>
          )}
          {user.isAuth && <UserMenu />}

          <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ width: 35, height: 35 }} />
          </IconButton>
        </Toolbar>
      </AppContainerStyled>
      <SwipeableDrawer
        anchor={'left'}
        open={state.left}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <NavigateMenu />
      </SwipeableDrawer>
    </AppBarStyled>
  );
};

export default Header;
