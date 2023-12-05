import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAddDishContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(2),
  height: '585px',
  maxHeight: '85vh',
}));

export const StyledAddDishFormBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(3),
  flexGrow: 1,
}));
