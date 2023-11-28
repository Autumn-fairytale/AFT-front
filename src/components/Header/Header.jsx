import { useState } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { theme } from '@/theme/theme';
import { ThemeProvider } from '@emotion/react';
import SearchBar from './searchBar.jsx';

import Logo from '../../assets/images/logo.svg';

import './header.styled.css';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        style={{ background: theme.palette.background.default }}
      >
        <div className="header-layout">
          <div className="logo-container">
            <Link to="#">
              <img src={Logo} alt="logo" style={{ maxWidth: 100 }} />
            </Link>
          </div>
          <Toolbar style={{ padding: '0 ' }}>
            <div className="search-bar">
              <SearchBar />
            </div>

            <div className="navbar">
              <Link to="#" className="nav-link">
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: theme.typography.fontFamily,
                    color: theme.palette.secondary.main,
                  }}
                >
                  Home
                </Typography>
              </Link>
              <Link to="#" className="nav-link">
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: theme.typography.fontFamily,
                    color: theme.palette.secondary.main,
                  }}
                >
                  About
                </Typography>
              </Link>
              <Link to="#" className="nav-link">
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: theme.typography.fontFamily,
                    color: theme.palette.secondary.main,
                  }}
                >
                  Contact
                </Typography>
              </Link>
            </div>

            <div className="user-cart-icons">
              <IconButton
                className="icon"
                size="small"
                edge="end"
                color="inherit"
                onClick={handleMenuOpen}
              >
                <FaUser />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>Log in</MenuItem>
              </Menu>

              <IconButton
                className="icon"
                size="small"
                edge="end"
                color="inherit"
              >
                <FaShoppingCart />
              </IconButton>
            </div>
          </Toolbar>
        </div>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
