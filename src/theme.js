import { red } from '@mui/material/colors';
import { createTheme, lighten } from '@mui/material/styles';

const primaryColor = '#FF7622';
const outlineColor = '#C5C5C5';
// Create a theme instance.

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor, // Main elements
      light: '#ff762230', // Minor elements
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
    MuiButton: {
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
    },
    MuiOutlinedInput: {
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
    },
  },
});

export default theme;
