import { Link } from 'react-router-dom';

import { Box, styled } from '@mui/material';

export const CartItemStyled = styled(Box)({
  display: 'flex',
  gap: '10px',

  padding: '10px',
});

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
