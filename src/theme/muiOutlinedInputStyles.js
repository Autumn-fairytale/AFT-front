import { lighten } from '@mui/material';

import { customColors } from '@/constants';

export const muiOutlinedInputStyles = {
  styleOverrides: {
    root: {
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: lighten(customColors.primaryColor, 0.2),
      },
    },
    notchedOutline: {
      borderColor: customColors.outlineColor,
    },
  },
};
