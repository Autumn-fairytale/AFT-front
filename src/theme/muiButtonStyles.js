import { lighten } from '@mui/material';

const primaryColor = '#FF7622';

export const muiButtonStyles = {
  styleOverrides: {
    contained: {
      color: 'white',
      '&:hover': {
        backgroundColor: lighten(primaryColor, 0.1),
      },
      '&:active': {
        backgroundColor: primaryColor,
      },
      '& .MuiTouchRipple-child': {
        backgroundColor: lighten(primaryColor, 0.5),
      },
    },
  },
};
