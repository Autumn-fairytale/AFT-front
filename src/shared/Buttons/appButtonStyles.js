import { darken, lighten } from '@mui/material/styles';

/* Set background color and hover effect for each button type */
const containedButtonStyles = ({ theme }) => `
  background-color: ${theme.palette.primary.main};
  &:hover {
    background-color: ${darken(theme.palette.primary.main, 0.1)};
  }
`;

const outlinedButtonStyles = ({ theme }) => `
  color: ${theme.palette.primary.main};
  border-color: ${lighten(theme.palette.primary.main, 0.4)};
  &:hover {
    background-color: ${theme.palette.primary.light};
    border-color: ${lighten(theme.palette.primary.main, 0.2)};
  }
`;

const textButtonStyles = ({ theme }) => `
  color: ${theme.palette.primary.main};
  &:hover {
    background-color: ${theme.palette.primary.light};
  }
`;

/* Apply common button styles and styles based on type */
export const appButtonStyles = (theme, type) => {
  const styleMappings = {
    contained: containedButtonStyles,
    outlined: outlinedButtonStyles,
    text: textButtonStyles,
  };

  return {
    ...styleMappings[type]({ theme }),
    height: '46px',
    width: 'max-content',
    fontSize: '1rem',
    lineHeight: '1.5',
    textTransform: 'none',
  };
};
