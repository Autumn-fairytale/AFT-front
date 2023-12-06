import { Link } from 'react-router-dom';

import { Box, IconButton, styled, Typography } from '@mui/material';

export const CartItemStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isAvailable' && prop !== 'isDefault',
})(({ isAvailable, isDefault }) => ({
  position: 'relative',
  opacity: `${isAvailable ? 1 : 0.4}`,
  pointerEvents: `${isAvailable ? 'auto' : 'none'}`,
  display: 'flex',

  ...(isDefault
    ? {
        gap: '1rem',
        padding: '1.5rem 0.8rem',
      }
    : {
        gap: '10px',
        padding: '10px',
      }),
}));

export const CartItemRemoveStyled = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: '10px',
  top: '10px',

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

export const CartItemDescStyled = styled(Typography)({
  height: '100%',
  maxWidth: '280px',
  maxHeight: '54px',
  margin: '1rem 0 auto',
  boxSizing: 'border-box',

  fontStyle: 'italic',
  fontSize: '0.85rem',
  lineHeight: 1.3,
  textAlign: 'justify',

  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
});

export const CartItemTagBlockStyled = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isDefault',
})(({ isDefault }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: `${isDefault ? '0.5rem' : '0.3rem'}`,
}));

export const CartItemTagStyled = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 8px',

  width: 'fit-content',
  height: '26px',

  fontSize: '0.8rem',
  backgroundColor: `${theme.palette.grey[200]}`,
  borderRadius: '5px',
}));
