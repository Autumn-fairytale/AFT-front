import { Box, styled } from '@mui/material';

export const UserOrderItemsStyled = styled(Box)({
  display: 'flex',
  gap: '5px',
});

UserOrderItemsStyled.defaultProps = {
  component: 'ul',
};
