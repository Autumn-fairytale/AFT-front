import { autocompleteClasses } from '@mui/material/Autocomplete';
import { lighten, styled } from '@mui/material/styles';

export const AutocompleteWrapper = styled('div')(
  ({ theme, error }) => `
  color: ${theme.palette.text.primary};
  font-size: 14px;

  & .MuiFormHelperText-root {
    padding: 0 14px;
  }

  &:hover label {
    color: ${error ? theme.palette.error.main : theme.palette.primary.main};
  }
`
);

export const Label = styled('label')(
  ({ theme, error }) =>
    `
  margin-left: 10px;
  padding: 2px 6px;
  line-height: 1;
  display: block;
  color: ${error ? theme.palette.error.main : theme.palette.text.secondary};
  font-size: 0.8rem;
  position: relative;
  top: 8px;
  width: min-content;
  background-color: ${theme.palette.background.default};
  z-index: 1;

  &.focused {
    color: ${error ? theme.palette.error.main : theme.palette.primary.main};
  }
`
);

export const InputWrapper = styled('div')(({ theme, error }) => {
  const borderColor = error
    ? theme.palette.error.main
    : theme.palette.primary.main;

  return `
  width: 100%;
  border: 1px solid ${error ? theme.palette.error.main : '#C5C5C5'};
  border-radius: 4px;
  min-height: 56px;
  display: flex;
  flex-wrap: wrap;
  padding: 9px 8px;
  align-items: center;
  background-color: ${theme.palette.background.default};
  gap: 4px;

  &:hover {
    border-color: ${borderColor};
  }

  &.focused {
    outline: 1px solid ${borderColor};
    border-color: ${borderColor};
  }

  & input {
    color: ${theme.palette.secondary.main};
    background-color: ${theme.palette.background.default};
  
    height: 30px;
    font-size: 16px;
    font-family: ${theme.typography.fontFamily};
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;

    border: 0;
    margin: 0;
    outline: 0;

    &::placeholder {
      font-size: 16px;
      color: ${error ? theme.palette.error.main : theme.palette.text.secondary};
    }
  }

    &.focused {
    outline: 1px solid ${borderColor};
    border-color: ${borderColor};

    & input::placeholder {
      color: ${theme.palette.text.secondary};
    }
  }
`;
});

export const Listbox = styled('ul')(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.background.paper};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 3;

  & li {
    padding: 5px 12px;
    display: flex;
    font-size: 16px;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.background.paper};
    font-weight: 600;

    & svg {
        color: ${theme.palette.primary.main};
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${lighten(theme.palette.primary.light, 0.2)};
    cursor: pointer;

    & svg {
        color: ${theme.palette.text.secondary};
    }
  }
`
);
