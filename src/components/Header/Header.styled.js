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
  /* background-color: #0f0f0f; */
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
