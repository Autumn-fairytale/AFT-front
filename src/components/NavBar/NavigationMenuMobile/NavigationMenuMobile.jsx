import MenuIcon from '@mui/icons-material/Menu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import PropTypes from 'prop-types';

export default function NavigationMenuMobile({ anchor, onClick, onClose }) {
  const isNavMenuMobOpen = Boolean(anchor);

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={onClick}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>
      {isNavMenuMobOpen && (
        <Menu
          anchorEl={anchor}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          id="menu-appbar"
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchor)}
          onClose={onClose}
        >
          <MenuItem>
            <IconButton
              size="large"
              aria-label="menu with all dishes"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuBookIcon />
            </IconButton>
            <p>Menu</p>
          </MenuItem>

          <MenuItem>
            <IconButton
              size="large"
              aria-label="list of all chef cooks"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <RestaurantIcon />
            </IconButton>
            <p>Chefs</p>
          </MenuItem>
        </Menu>
      )}
    </>
  );
}

NavigationMenuMobile.propTypes = {
  anchor: PropTypes.object,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
};
