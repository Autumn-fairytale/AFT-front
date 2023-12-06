import { Link } from 'react-router-dom';

import { Box, styled } from '@mui/material';

export const CartItemStyled = styled(Box)({
  position: 'relative',

  padding: '10px',
});

export const CartItemContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isAvailable',
})(({ isAvailable }) => ({
  display: 'flex',
  gap: '10px',

  opacity: `${isAvailable ? 1 : 0.3}`,
  pointerEvents: `${isAvailable ? 'auto' : 'none'}`,
}));

export const CartItemBodyStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
});

export const CartItemLink = styled(Link)({
  '&:hover': {
    textDecoration: 'underline',
  },
});
