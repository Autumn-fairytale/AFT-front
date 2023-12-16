import { IconButton } from '@mui/material';

import { AppButton } from '@/shared';
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

export const StyledButton = styled(AppButton)`
  height: '16px';
  width: 75px;
  line-height: '1.2';
  font-size: 13px;
`;

export const ActionButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
