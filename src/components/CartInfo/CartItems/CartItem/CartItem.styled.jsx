import { Link } from 'react-router-dom';

import { Box, IconButton, styled } from '@mui/material';

export const CartItemStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isAvailable',
})(({ isAvailable }) => ({
  position: 'relative',

  display: 'flex',
  gap: '10px',

  padding: '10px',

  opacity: `${isAvailable ? 1 : 0.4}`,
  pointerEvents: `${isAvailable ? 'auto' : 'none'}`,
}));

export const CartItemRemoveStyled = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: 0,

  pointerEvents: 'auto',

  '&:hover': {
    color: `${theme.palette.primary.main}`,
  },
}));

CartItemRemoveStyled.defaultProps = {
  size: 'small',
};

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
