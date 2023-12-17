import Typography from '@mui/material/Typography';

import styled from '@emotion/styled';

export const TypographyStyled = styled(Typography)`
  margin-top: 12px;
  padding-bottom: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 28px;
  text-transform: uppercase;
  border-bottom: 3px solid ${({ theme }) => theme.palette.primary.main};
`;
