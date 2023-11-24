import { FormControl, MenuItem } from '@mui/material';
import { lighten, styled } from '@mui/material/styles';

export const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
    &.MuiMenuItem-root:hover {
      background-color: ${lighten(theme.palette.primary.light, 0.5)};
    }
    & .MuiTouchRipple-root span {
      background-color: ${theme.palette.primary.light};
    }
    &.Mui-selected,
    &.Mui-selected:hover {
      background-color: ${theme.palette.primary.light};
    }
  `
);

export const StyledFormControl = styled(FormControl)(
  ({ theme, placeholder, value, error }) => `

    &&:hover .MuiInputLabel-root:not(.Mui-error) {
      color: ${theme.palette.primary.main};
    }

    && .MuiOutlinedInput-root.Mui-error {
      
      .MuiOutlinedInput-notchedOutline {
        border-color: ${theme.palette.error.main};
      }
      .MuiInputLabel-root  {
        color: ${theme.palette.error.main};
      }
    }

    ${
      !value &&
      placeholder &&
      `& .MuiOutlinedInput-root {
        color: ${
          error ? theme.palette.error.main : theme.palette.text.secondary
        };
      }
      `
    }

    && .MuiMenuItem-root.Mui-disabled.Mui-selected {
      background-color: ${theme.palette.background.paper};
    }

    ${
      placeholder &&
      `&.MuiFormControl-root legend {
        max-width: 100%;
      }`
    }

  `
);
