import { Box, styled } from '@mui/material';

import { AppTextInput } from '..';

export const AppNumberInputStyled = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',

  height: 'fit-content',
});

export const AppTextInputStyled = styled(AppTextInput)({
  width: '40px',
});

AppTextInputStyled.defaultProps = {
  size: 'small',
  autoComplete: 'off',
  InputProps: {
    inputProps: {
      style: { textAlign: 'center', padding: '0px' },
      readOnly: true,
    },
    style: { padding: 0 },
  },
};
