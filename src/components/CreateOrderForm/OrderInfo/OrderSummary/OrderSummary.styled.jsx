import { Box, styled, Typography } from '@mui/material';

export const OrderSummaryStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',

  padding: '10px',
});

export const OrderSummaryTitle = styled(Typography)({
  fontWeight: 600,
});
OrderSummaryTitle.defaultProps = { component: 'h3', variant: 'h6' };
