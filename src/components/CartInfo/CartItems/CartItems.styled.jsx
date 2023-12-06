import { Box, styled } from '@mui/material';

export const CartItemsBoxStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isDefault',
})(({ isDefault }) => ({
  ...(isDefault
    ? {
        padding: '0 28px',
        boxSizing: 'border-box',
        maxHeight: 'calc(80vh - 60px - 56px)',
        overflow: 'scroll',
      }
    : {}),
}));
