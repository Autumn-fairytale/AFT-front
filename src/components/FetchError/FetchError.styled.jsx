import { Box, styled } from '@mui/material';

export const FetchErrorStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  flexGrow: 1,
});

FetchErrorStyled.defaultProps = {
  component: 'section',
};
