import { Box, styled } from '@mui/material';

export const NoDataStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  flexGrow: 1,
});

NoDataStyled.defaultProps = {
  component: 'section',
};
