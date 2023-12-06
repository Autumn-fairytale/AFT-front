import { Box, styled, Typography } from '@mui/material';

export const UserCartFooterStyled = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,

  display: 'grid',
  gridTemplateColumns: '25% 42% 33%',
  placeItems: 'center',

  width: '100%',
  overflow: 'hidden',
  boxSizing: 'border-box',
  paddingLeft: '1.6rem',

  backgroundColor: '#eee',
  borderBottomLeftRadius: '1rem',
  borderBottomRightRadius: '1rem',
});

export const UserCartQuantityStyled = styled(Typography)({
  fontWeight: 600,
  fontSize: '1.1rem',
  fontFamily: 'Inter',
});

export const UserCartTotalStyled = styled(Typography)({
  fontWeight: 600,
  fontSize: '1.3rem',
  fontFamily: 'Inter',
});

export const modalStyles = {
  padding: 0,
  paddingBottom: '56px',
  maxHeight: '80vh',
  minHeight: '320px',
  overflow: 'hidden',
};

export const checkoutStyles = {
  width: '100%',
  borderRadius: '0',
  height: '56px',
  fontSize: '1.2rem',
};
