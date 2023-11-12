import { styled } from '@mui/material';
import { TextField } from '@mui/material';

/* By default, MUI has only small (40px) and normal (56px) input sizes. 
The middle size is 46px */
const mediumInputStyles = {
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
};

export const StyledBaseInput = styled(TextField)(({ size, error }) => {
  return {
    'MuiFormControl-root': {
      boxSizing: 'border-box',
      width: 'inherit',
    },
    ...(size === 'medium' && mediumInputStyles),
    ...(error && {
      '&:hover fieldset': {
        borderColor: 'transparent',
      },
    }),
  };
});
