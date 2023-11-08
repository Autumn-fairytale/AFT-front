import { lighten } from '@mui/material';

const primaryColor = '#FF7622';
const outlineColor = '#C5C5C5';

export const muiOutlinedInputStyles = {
  styleOverrides: {
    root: {
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: lighten(primaryColor, 0.2),
      },
    },
    notchedOutline: {
      borderColor: outlineColor,
    },
  },
};
