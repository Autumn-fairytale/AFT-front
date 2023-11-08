import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

import { muiButtonStyles } from './muiButtonStyles';
import { muiOutlinedInputStyles } from './muiOutlinedInputStyles';

export const primaryColor = '#FF7622';
export const outlineColor = '#C5C5C5';

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor, // Main elements
      light: '#ff762230', // Minor elements
      superLight: '#FFF',
    },
    secondary: {
      main: '#333333', // Main Text
      light: '#888888', // Minor Color
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F9F9F9', // Grey background
      paper: '#FFF', // White background
    },
    text: {
      primary: '#333333', // Main Text
      secondary: '#888888', // Minor Text
    },
    outline: {
      main: outlineColor, // Outline
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'Inter', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: { ...muiButtonStyles },
    MuiOutlinedInput: { ...muiOutlinedInputStyles },
  },
});
