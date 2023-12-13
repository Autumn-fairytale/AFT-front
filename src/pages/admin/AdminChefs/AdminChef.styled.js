import { IconButton } from '@mui/material';

import styled from '@emotion/styled';

export const IconButtonStyled = styled(IconButton)`
  transition: color 250ms linear;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
