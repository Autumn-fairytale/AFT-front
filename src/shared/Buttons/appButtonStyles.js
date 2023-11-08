import { darken, lighten } from '@mui/material/styles';

import { css } from '@emotion/react';

/* Set background color and hover effect for each button type */
export const containedButtonStyles = (theme) => css`
  background-color: ${theme.palette.primary.main};
  &:hover {
    background-color: ${darken(theme.palette.primary.main, 0.1)};
  }
`;

export const outlinedButtonStyles = (theme) => css`
  color: ${theme.palette.primary.main};
  border-color: ${lighten(theme.palette.primary.main, 0.4)};
  &:hover {
    background-color: ${theme.palette.primary.light};
    border-color: ${lighten(theme.palette.primary.main, 0.2)};
  }
`;

export const textButtonStyles = (theme) => css`
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

  const selectedStyle = styleMappings[type];

  return css`
    height: 46px;
    width: max-content;
    font-size: 1rem;
    line-height: 1.5;
    text-transform: none;
    ${selectedStyle(theme)}
  `;
};
