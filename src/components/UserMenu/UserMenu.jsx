import { TbChefHat } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Badge } from '@mui/material';

import { route } from '@/constants';
import { signOut } from '@/redux/auth/operations';
import { selectIsAuth, selectRoles, selectUser } from '@/redux/auth/selectors';
import styled from '@emotion/styled';
import {
  IconButtonStyled,
  LinkStyled,
  ListItemStyled,
  ListStyled,
} from './UserMenu.slyled';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: '#363945',
    color: 'white',
  },
}));

export const UserMenu = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const roles = useSelector(selectRoles);
  const { cart, favoriteDishes, favoriteChefs, avatar } =
    useSelector(selectUser);
  console.log('favoriteDishes:', favoriteDishes);
  console.log('cart:', cart);
  console.log('avatar:', avatar);

  return (
    <>
      {!roles.includes('admin') && (
        <Avatar src={avatar} sx={{ width: 35, height: 35, mr: 1 }} />
      )}
      <ListStyled>
        {!roles.includes('admin') && (
          <>
            <ListItemStyled>
              <LinkStyled to={route.FAVORITE_DISHES}>
                <StyledBadge
                  badgeContent={favoriteDishes.length}
                  color="success"
                >
                  <FavoriteIcon sx={{ width: 30, height: 30 }} />
                </StyledBadge>
              </LinkStyled>
            </ListItemStyled>
            <ListItemStyled>
              <LinkStyled to={route.FAVORITE_CHEFS}>
                <StyledBadge
                  badgeContent={favoriteChefs.length}
                  color="success"
                >
                  <TbChefHat style={{ width: '30px', height: '30px' }} />
                </StyledBadge>
              </LinkStyled>
            </ListItemStyled>
            <ListItemStyled>
              <LinkStyled>
                <StyledBadge badgeContent={cart.length} color="success">
                  <ShoppingCartIcon sx={{ width: 30, height: 30 }} />
                </StyledBadge>
              </LinkStyled>
            </ListItemStyled>
          </>
        )}
      </ListStyled>
      <IconButtonStyled
        onClick={() => {
          if (isAuth) {
            dispatch(signOut());
            toast.success('You have successfully signed out');
          }
        }}
      >
        <LogoutIcon sx={{ width: 30, height: 30 }} />
      </IconButtonStyled>
    </>
  );
};
