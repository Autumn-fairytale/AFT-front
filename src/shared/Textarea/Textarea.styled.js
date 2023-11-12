import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import styled from '@emotion/styled';

export const TextareaStyled = styled(TextareaAutosize)`
  width: 600px;
  max-width: 600px;
  font-size: 1.3rem;
  overflow: auto;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.text.primary};
  background: ${({ theme }) => theme.palette.background.paper};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  box-shadow: 0px 2px 2px ${({ theme }) => theme.palette.primary.main};

  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }

  &:focus {
    border-color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.primary.main};
  }

  &:focus-visible {
    outline: 0;
  }
`;
