import { Box } from '@mui/material';

import styled from '@emotion/styled';

export const CartItemImageThumbStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '20px',

  overflow: 'auto',

  backgroundColor: `${theme.palette.grey[400]}`,
}));

export const CartItemImageStyled = styled('img')({
  display: 'block',

  width: 'auto',
  height: '100%',

  objectFit: 'cover',
  objectPosition: 'center',
});
