import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';

import { route } from '@/constants/route.js';
import { selectIsAuth } from '@/redux/auth/selectors.js';
import { NavigateMenu } from '../NavigateMenu/NavigateMenu.jsx';
import { NotAuthUserMenu } from '../NotAuthUserMenu/NotAuthUserMenu.jsx';
import { UserMenu } from '../UserMenu/UserMenu.jsx';
import { IconButtonStyled } from '../UserMenu/UserMenu.slyled.js';
import { AppBarStyled, AppContainerStyled } from './Header.styled.js';

// import SearchBar from './searchBar.jsx';
import Logo from '../../assets/images/logo.svg';

// Mock user data
// const user = { isAuth: true, roles: ['user', 'chef', 'admin', ''] };

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isAuth = useSelector(selectIsAuth);

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <AppBarStyled position="static">
      <AppContainerStyled>
        <Link to={route.HOME}>
          <img src={Logo} alt="logo" style={{ maxWidth: 100 }} />
        </Link>

        <Toolbar>
          {!isAuth && <NotAuthUserMenu />}
          {isAuth && <UserMenu />}

          <IconButtonStyled aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ width: 35, height: 35 }} />
          </IconButtonStyled>
        </Toolbar>
      </AppContainerStyled>
      <SwipeableDrawer
        anchor={'left'}
        open={isOpen}
        onClose={toggleDrawer()}
        onOpen={toggleDrawer()}
      >
        <NavigateMenu onClose={toggleDrawer} onOpen={toggleDrawer} />
      </SwipeableDrawer>
    </AppBarStyled>
  );
};

export default Header;
