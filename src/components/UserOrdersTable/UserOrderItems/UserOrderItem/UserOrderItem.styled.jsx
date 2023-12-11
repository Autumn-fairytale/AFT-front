import { Box, styled } from '@mui/material';

export const UserOrderItemStyled = styled(Box)({
  cursor: 'pointer',

  transition: '300ms ease transform',
  '&:hover': {
    transform: 'scale(1.2)',
  },
});

UserOrderItemStyled.defaultProps = {
  component: 'li',
};
