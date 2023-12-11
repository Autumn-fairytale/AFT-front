import Typography from '@mui/material/Typography';

import styled from '@emotion/styled';

export const TypographyStyled = styled(Typography)`
  margin-top: 24px;
  padding-bottom: 24px;
  text-align: center;
  font-weight: 600;
  border-bottom: 3px solid ${({ theme }) => theme.palette.primary.main};
`;
