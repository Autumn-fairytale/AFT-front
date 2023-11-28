import { Box, styled } from '@mui/material';

export const CartItemStyled = styled(Box)({
  display: 'flex',
  gap: '10px',

  padding: '10px',
});

export const CartItemThumbStyled = styled('div')(({ theme }) => ({
  width: '80px',
  height: '80px',

  overflow: 'auto',

  backgroundColor: `${theme.palette.grey[400]}`,
  borderRadius: '10px',
}));

export const CartItemBodyStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
});
