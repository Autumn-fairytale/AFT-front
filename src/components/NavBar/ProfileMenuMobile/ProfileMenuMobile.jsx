import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import PropTypes from 'prop-types';
export default function ProfileMenuMobile({ anchor, onClose, onClick }) {
  const isProfMenuMobOpen = Boolean(anchor);

  const profileMenuMobId = 'primary-search-account-menu-mobile';
  return (
    <>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={profileMenuMobId}
          aria-haspopup="true"
          onClick={onClick}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Box>

      {isProfMenuMobOpen && (
        <Box sx={{ display: { sx: 'flex', md: 'None' } }}>
          <Menu
            anchorEl={anchor}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            id="profile-menu-mobile"
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={isProfMenuMobOpen}
            onClose={onClose}
          >
            <MenuItem>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <p>Profile</p>
            </MenuItem>

            <MenuItem>
              <IconButton
                size="large"
                aria-label="show 7 new cart items"
                color="inherit"
              >
                <Badge badgeContent={7} color="error">
                  <ShoppingBasketIcon />
                </Badge>
              </IconButton>
              <p>Shopping Cart</p>
            </MenuItem>

            <MenuItem>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <p>Notifications</p>
            </MenuItem>

            <MenuItem>
              <IconButton
                size="large"
                aria-label="show 4 new favorites"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
              <p>Favorites</p>
            </MenuItem>
          </Menu>
        </Box>
      )}
    </>
  );
}

ProfileMenuMobile.propTypes = {
  anchor: PropTypes.object,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
};
