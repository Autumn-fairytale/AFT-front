import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledUserOrderDetailsPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: 400,
  maxHeight: '85vh',
  margin: 'auto',
  overflowY: 'auto',
  backgroundColor: theme.palette.background.paper,
  '::-webkit-scrollbar': {
    width: '4px',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#888',
    borderRadius: '2px',
  },
  '::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#555',
  },
}));

export const StyledUserOrderDetailsBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:not(:last-child)': {
    marginBottom: '1rem',
  },
});

export const StyledUserOrderDetailsTypography = styled(Typography)({
  textAlign: 'center',
  '&.title': {
    marginTop: '1rem',
  },
  '&.orderDetails': {
    flexGrow: 1,
  },
  '&.totalPrice': {
    color: 'primary.main',
    fontWeight: 'bold',
  },
});

export const StyledUserOrderDetailsListItem = styled(ListItem)({
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '2rem',
});
