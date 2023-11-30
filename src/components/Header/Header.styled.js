import { AppBar } from '@mui/material';

import { AppContainer } from '@/shared';
import styled from '@emotion/styled';

export const AppContainerStyled = styled(AppContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AppBarStyled = styled(AppBar)`
  background: ${({ theme }) => theme.palette.background.default};
`;
