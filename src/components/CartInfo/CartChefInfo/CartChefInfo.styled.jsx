import { Link } from 'react-router-dom';

import { Box, styled } from '@mui/material';

export const CartChefInfoStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',

  padding: '10px',

  backgroundColor: `${theme.palette.grey[200]}`,
  borderRadius: '10px',
}));

export const CartChefInfoLink = styled(Link)({
  '&:hover': {
    textDecoration: 'underline ',
  },
});
