import { FaShoppingCart } from 'react-icons/fa';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, Badge, IconButton, List } from '@mui/material';

import styled from '@emotion/styled';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: 'orange',
    color: 'black',
  },
}));

export const UserMenu = () => {
  return (
    <>
      <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 35, height: 35 }}
      />
      <List>
        <IconButton>
          <StyledBadge badgeContent={4} color="success">
            <FavoriteIcon />
          </StyledBadge>
        </IconButton>
        <IconButton>
          <StyledBadge badgeContent={4} color="success">
            <FaShoppingCart />
          </StyledBadge>
        </IconButton>
      </List>
      <IconButton
        onClick={() => {
          console.log('Logout');
        }}
      >
        <LogoutIcon sx={{ width: 35, height: 35 }} />
      </IconButton>
    </>
  );
};
