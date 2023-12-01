import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import styled from '@emotion/styled';

export const TextAreaStyled = styled(TextareaAutosize)`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 100px;
  max-height: 200px;
  resize: none;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.1px;
  padding: 8px 12px;
  border-radius: 4px;
  color: ${({ theme, error }) => {
    return error ? theme.palette.error.main : theme.palette.text.primary;
  }};
  background: ${({ theme }) => theme.palette.background.paper};
  border: 1px solid #c5c5c5;

  &:hover {
    border-color: ${({ theme, error }) => {
      return error ? theme.palette.error.main : theme.palette.primary.main;
    }};
  }

  &:focus {
    border-color: ${({ theme, error }) => {
      return error ? theme.palette.error.main : theme.palette.primary.main;
    }};
    border-width: 2px;
  }

  &:focus-visible {
    outline: 0;
  }
`;
