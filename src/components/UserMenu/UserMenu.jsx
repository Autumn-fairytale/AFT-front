import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Badge } from '@mui/material';

import { useModal } from '@/hooks/useModal';
import { signOut } from '@/redux/auth/operations';
import { selectIsAuth, selectRoles } from '@/redux/auth/selectors';
import styled from '@emotion/styled';
import UserModalCart from '../UserModalCart';
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
    backgroundColor: '#363945',
    color: 'white',
  },
}));

const items = [
  {
    dish: {
      id: '655f6f7f9da6654a23460bad',
      name: 'Available Kotleta',
      image: 'https://site/url_to_image.jpg',
      description:
        'A tasty kotleta with fresh ingredients. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 11.99,
      isVegan: false,
      cuisine: 'Ukrainian',
      category: 'Main',
      isAvailable: true,
      spiceLevel: 1,
    },
    count: 2,
  },
  {
    dish: {
      id: '655f6f7f9da6664a23460baf',
      name: 'Available Kotleta',
      image:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/huqdxgwkvbhsfjqtexsm.jpg',
      description: 'A tasty kotleta with fresh  ingredients.',
      price: 11000.99,
      isVegan: false,
      cuisine: 'Italian',
      category: 'Salad',
      isAvailable: true,
      spiceLevel: 1,
    },
    count: 4,
  },
  {
    dish: {
      id: '655f6f7f9fa6654a23460baf',
      name: 'Available Kotleta',
      image:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/huqdxgwkvbhsfjqtexsm.jpg',
      description:
        'A tasty kotleta with fresh ingredients. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 11000.99,
      isVegan: false,
      cuisine: 'American',
      category: 'Soup',
      isAvailable: true,
      spiceLevel: 0,
    },
    count: 3,
  },
  {
    dish: {
      id: '655f6f7f9da6654a23260bad',
      name: 'Available Kotleta',
      image: 'https://site/url_to_image.jpg',
      description:
        'A tasty kotleta with fresh ingredients. Lorem ipsum dolor sit amet, in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 11.99,
      isVegan: false,
      cuisine: 'Ukrainian',
      category: 'Main',
      isAvailable: true,
      spiceLevel: 3,
    },
    count: 1,
  },
  {
    dish: {
      id: '655f6f7f9da6654a13660baf',
      name: 'Available Kotleta',
      image:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/huqdxgwkvbhsfjqtexsm.jpg',
      description:
        'A tasty kotleta with fresh ingredients. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 11000.99,
      isVegan: false,
      cuisine: 'American',
      category: 'Soup',
      isAvailable: true,
      spiceLevel: 0,
    },
    count: 1,
  },
];

const data = {
  chef: {
    id: '23nj23jnNJ34JK2',
    avatar: 'image.jpg',
    name: 'Alain Ducasse',
  },
  items,
};

// const user = { isAuth: true, roles: ['user', 'chef', 'admin', 'courier'] };
// const user = { isAuth: true, roles: ['user', '', '', ''] };

const favDishes = 6;
const dishesInCart = 3;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const roles = useSelector(selectRoles);
  const { isOpen, openModal, onClose: closeModal } = useModal();
  return (
    <>
      {!roles.includes('admin') && (
        <Avatar
          src="/static/images/avatar/1.jpg"
          sx={{ width: 35, height: 35, mr: 1 }}
        />
      )}
      <ListStyled>
        {!roles.includes('admin') && (
          <>
            {/* USER FAVORITES */}
            <ListItemStyled>
              <IconButtonStyled>
                <StyledBadge badgeContent={favDishes} color="success">
                  <FavoriteIcon sx={{ width: 30, height: 30 }} />
                </StyledBadge>
              </IconButtonStyled>
            </ListItemStyled>

            {/* USER CART */}
            <ListItemStyled>
              <IconButtonStyled>
                <StyledBadge badgeContent={dishesInCart} color="success">
                  <ShoppingCartIcon
                    sx={{ width: 30, height: 30 }}
                    onClick={openModal}
                  />
                </StyledBadge>
              </IconButtonStyled>
            </ListItemStyled>

            {/* USER CART MODAL */}
            <UserModalCart
              isOpen={isOpen}
              closeModal={closeModal}
              data={data}
            />
          </>
        )}

        {/* LOGOUT */}
        <ListItemStyled>
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
        </ListItemStyled>
      </ListStyled>
    </>
  );
};
