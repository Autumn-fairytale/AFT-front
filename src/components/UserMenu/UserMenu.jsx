import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Badge } from '@mui/material';

import styled from '@emotion/styled';
import {
  IconButtonStyled,
  ListItemStyled,
  ListStyled,
} from './UserMenu.slyled';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: '#004710',
    color: 'white',
  },
}));

const favDishes = 6;
const dishesInCart = 3;

export const UserMenu = () => {
  return (
    <>
      <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 35, height: 35, mr: 1 }}
      />
      <ListStyled>
        <ListItemStyled>
          <IconButtonStyled>
            <StyledBadge badgeContent={favDishes} color="success">
              <FavoriteIcon sx={{ width: 30, height: 30 }} />
            </StyledBadge>
          </IconButtonStyled>
        </ListItemStyled>
        <ListItemStyled>
          <IconButtonStyled>
            <StyledBadge badgeContent={dishesInCart} color="success">
              <ShoppingCartIcon sx={{ width: 30, height: 30 }} />
            </StyledBadge>
          </IconButtonStyled>
        </ListItemStyled>
        <ListItemStyled>
          <IconButtonStyled
            onClick={() => {
              console.log('Logout');
            }}
          >
            <LogoutIcon sx={{ width: 30, height: 30 }} />
          </IconButtonStyled>
        </ListItemStyled>
      </ListStyled>
    </>
  );
};