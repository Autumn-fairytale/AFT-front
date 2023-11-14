import * as React from 'react';

import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { logoUrl } from '@/assets/images/IdloLogoUrl.jsx';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  StyledLogoLinkDesktop,
  StyledLogoLinkMobile,
} from '@/components/NavBar/NavBar.styled.jsx';
import NavigationMenuMobile from '@/components/NavBar/NavigationMenuMobile/NavigationMenuMobile.jsx';
import ProfileMenuMobile from '@/components/NavBar/ProfileMenuMobile/ProfileMenuMobile.jsx';

const pages = ['Home', 'Menu', 'Chefs'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElProfile, setAnchorElProfile] = React.useState(null);
  const [anchorElNavMenuMob, setAnchorElNavMenuMob] = React.useState(null);
  const [anchorElProfMenuMob, setAnchorElProfMenuMob] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElProfile(null);
  };

  const menuId = 'primary-search-account-menu';

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StyledLogoLinkDesktop component="a" href="/">
            <Box component="img" src={logoUrl} alt="idloLogo"></Box>
          </StyledLogoLinkDesktop>

          <NavigationMenuMobile
            anchor={anchorElNavMenuMob}
            onClick={(event) => setAnchorElNavMenuMob(event.currentTarget)}
            onClose={() => setAnchorElNavMenuMob(null)}
          />

          <StyledLogoLinkMobile component="a" href="/">
            <Box component="img" src={logoUrl} alt="idloLogo"></Box>
          </StyledLogoLinkMobile>

          <Search sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ flexGrow: 4, display: { xs: 'none', md: 'flex' } }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => setAnchorElProfMenuMob(null)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <ProfileMenuMobile
            anchor={anchorElProfMenuMob}
            onClick={(event) => setAnchorElProfMenuMob(event.currentTarget)}
            onClose={() => setAnchorElProfMenuMob(null)}
          />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title="Open shopping cart">
              <IconButton
                size="large"
                aria-label="show 7 new cart items"
                color="inherit"
              >
                <Badge badgeContent={7} color="error">
                  <ShoppingBasketIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Open favorites">
              <IconButton
                size="large"
                aria-label="show 4 new favorites"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Open notifications">
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleOpenUserMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElProfile}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElProfile)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
