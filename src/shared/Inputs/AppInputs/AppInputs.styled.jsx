import { styled } from '@mui/material';
import { Box } from '@mui/material';

export const StyledPasswordInput = styled(Box)(({ style }) => ({
  ...style,
  "input[type='password']": {
    fontFamily: 'Verdana',
    letterSpacing: '0.1em',
    opacity: 0.9,
  },
}));

export const StyledSearchInput = styled(Box)(({ value, style }) => ({
  ...style,
  '.MuiOutlinedInput-root': {
    paddingRight: 0,
    '& .MuiIconButton-root': {
      visibility: value ? 'visible' : 'hidden',
      transform: 'scale(0.8)',
    },
  },
}));

export const StyledPhoneInput = styled(Box)(({ style, theme }) => ({
  ...style,
  '.MuiInputBase-root.Mui-error:not(.Mui-focused) > input': {
    color: theme.palette.error.main,
  },
}));
