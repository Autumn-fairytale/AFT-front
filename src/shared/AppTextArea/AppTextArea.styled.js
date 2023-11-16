import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import styled from '@emotion/styled';

export const TextAreaStyled = styled(TextareaAutosize)`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 100px;
  max-height: 200px;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.1px;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${({ theme, error }) => {
    return error ? theme.palette.error.main : theme.palette.text.primary;
  }};
  background: ${({ theme }) => theme.palette.background.paper};
  border: 1px solid
    ${({ theme, error }) => {
      return error ? theme.palette.error.main : theme.palette.primary.main;
    }};
  box-shadow: 0px 2px 2px
    ${({ theme, error }) => {
      return error ? theme.palette.error.main : theme.palette.primary.main;
    }};

  &:hover {
    border-color: ${({ theme, error }) => {
      return error ? theme.palette.error.main : theme.palette.primary.main;
    }};
  }

  &:focus {
    border-color: ${({ theme, error }) => {
      return error ? theme.palette.error.main : theme.palette.primary.main;
    }};
    box-shadow: 0 0 0 2px
      ${({ theme, error }) => {
        return error ? theme.palette.error.main : theme.palette.primary.main;
      }};
  }

  &:focus-visible {
    outline: 0;
  }
`;
