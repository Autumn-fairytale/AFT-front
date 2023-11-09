import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import './header.css';
import Logo from './logo.svg';
import { theme } from '@/theme/theme';



function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{background: theme.palette.background.default}}>
      <div className="header-layout">     
        <div className="logo-container">
          <img src={Logo} alt="logo" style={{ maxWidth: 100 }} />
        </div>
        <Toolbar>
          <div>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleMenuOpen}>

              <AccountCircleIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
            </Menu>
          </div>

          {/* Корзина для покупок */}
          <IconButton size="large" edge="end" color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </div>
    </AppBar>
  );
}

export default Header;