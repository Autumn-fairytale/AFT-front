import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { route } from '@/constants';

// Mock user data
const user = { isAuth: true, roles: ['user', 'chef', 'admin', ''] };

export const NotAuthUserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
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
  );
};
