import { useState } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';

import { AppBarStyled, AppContainerStyled } from './Header.styled.js';

// import SearchBar from './searchBar.jsx';
import Logo from '../../assets/images/logo.svg';

import './header.styled.css';

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
        <Link to="#">
          <img src={Logo} alt="logo" style={{ maxWidth: 100 }} />
        </Link>

        <Toolbar style={{ padding: '0 ' }}>
          <IconButton onClick={handleMenuOpen}>
            <FaUser />
          </IconButton>
          <IconButton onClick={handleMenuOpen}>
            <FavoriteIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Log in</MenuItem>
          </Menu>

          <IconButton>
            <FaShoppingCart />
          </IconButton>
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
        <div style={{ width: '400px' }}>
          {Array.from({ length: 10 }).map((item, index) => (
            <div key={index}>Item {index}</div>
          ))}
        </div>
      </SwipeableDrawer>
    </AppBarStyled>
  );
};

export default Header;
