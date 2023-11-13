import * as React from 'react';

import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NotificationsIcon from '@mui/icons-material/Notifications';
import RestaurantIcon from '@mui/icons-material/Restaurant';
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
import ProfileMenuMobile from '@/components/NavBar/ProfileMenuMobile.jsx';

const pages = ['Menu', 'Chefs'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElProfSett, setAnchorElProfSett] = React.useState(null);
  const [anchorElNavMenuMob, setAnchorElNavMenuMob] = React.useState(null);
  const [anchorElProfMenuMob, setAnchorElProfMenuMob] = React.useState(null);

  const handleMobileMenuClose = () => {
    setAnchorElProfMenuMob(null);
  };

  const handleMobileMenuOpen = (event) => {
    setAnchorElProfMenuMob(event.currentTarget);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNavMenuMob(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElProfSett(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNavMenuMob(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElProfSett(null);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StyledLogoLinkDesktop component="a" href="/">
            <Box component="img" src={logoUrl} alt="idloLogo"></Box>
          </StyledLogoLinkDesktop>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNavMenuMob}
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
              open={Boolean(anchorElNavMenuMob)}
              onClose={handleCloseNavMenu}
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
          </Box>

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
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>

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
                anchorEl={anchorElProfSett}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElProfSett)}
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
          <ProfileMenuMobile
            anchor={anchorElProfMenuMob}
            onClose={handleMobileMenuClose}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
