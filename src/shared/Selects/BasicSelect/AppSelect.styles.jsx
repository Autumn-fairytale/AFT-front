import { FormControl, MenuItem } from '@mui/material';
import { lighten, styled } from '@mui/material/styles';

export const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
    &li.MuiMenuItem-root {
        height: 30px;
    }
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
  ({ theme, placeholder, value }) => `
    && .MuiSelect-select.MuiSelect-outlined {
      background-color: ${theme.palette.background.paper};
    }
    &&.MuiFormControl-root .MuiInputLabel-root[data-shrink="false"] {
      transform: translate(14px, 11px) scale(1);
    }
    && .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
      border-color: ${theme.palette.error.main};
    }
    & MuiMenuItem-root.Mui-disabled.Mui-selected {
background-color: ${theme.palette.background.paper};
    }
  
    ${
      placeholder &&
      `&.MuiFormControl-root legend {
        max-width: 100%;
      }
      `
    }

    ${
      !value &&
      placeholder &&
      `& .MuiOutlinedInput-root{
        color: ${theme.palette.text.secondary}
      }`
    }
  `
);
