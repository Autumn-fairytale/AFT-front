import { Box, styled } from '@mui/material';

export const UserButtonsBoxStyled = styled(Box)(({ theme }) => ({
  width: '100%',
  gridArea: 'buttons',

  '& button:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.superLight,
  },
}));

export const UserButtonsGroupStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
  width: '250px',
  margin: '0 auto',
});
