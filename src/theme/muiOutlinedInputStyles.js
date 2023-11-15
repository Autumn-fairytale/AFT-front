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
  variants: [
    {
      props: { size: 'medium' },
      style: {
        '& .MuiInputBase-input': {
          paddingTop: '11.5px',
          paddingBottom: '11.5px',
        },
        '& .MuiInputLabel-root': {
          transform: 'translate(14px, 11.5px) scale(1)',
        },
        '& .MuiInputLabel-shrink': {
          transform: 'translate(14px, -9px) scale(0.75)',
        },
      },
    },
  ],
};
