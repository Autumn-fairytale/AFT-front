import { Box, styled } from '@mui/material';

import { AppButton } from '@/shared';

export const PaymentButtonStyled = styled(Box)({ width: '100%' });

PaymentButtonStyled.defaultProps = {
  component: 'form',
};

export const PaymentButtonPayStyled = styled(AppButton)({
  width: '100%',
});
