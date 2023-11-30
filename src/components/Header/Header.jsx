import { useState } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import { List } from '@mui/material';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';

import { route } from '@/constants/route.js';
import styled from '@emotion/styled';
import { NavigateMenu } from '../NavigateMenu/NavigateMenu.jsx';
import { AppBarStyled, AppContainerStyled } from './Header.styled.js';

// import SearchBar from './searchBar.jsx';
import Logo from '../../assets/images/logo.svg';

// Mock user data
const user = { isAuth: true, roles: ['user', 'chef', 'admin', ''] };

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: 'orange',
    color: 'black',
  },
}));

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
                <Link to={route.SIGN_IN}>Login</Link>
              </MenuItem>
            )}
            {user.isAuth && (
              <MenuItem onClick={handleMenuClose}>
                <Link to={route.SIGN_IN}>Logout</Link>
              </MenuItem>
            )}
          </Menu>
          {user.isAuth && (
            <List>
              <IconButton>
                <StyledBadge badgeContent={4} color="success">
                  <FavoriteIcon />
                </StyledBadge>
              </IconButton>
              <IconButton>
                <StyledBadge badgeContent={4} color="success">
                  <FaShoppingCart />
                </StyledBadge>
              </IconButton>
            </List>
          )}

          <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
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
