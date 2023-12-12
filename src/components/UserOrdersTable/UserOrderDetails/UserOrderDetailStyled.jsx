import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export const StyledUserOrderDetailsPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  width: 450,
  maxHeight: '85vh',
  margin: 'auto',
  overflowY: 'auto',
  backgroundColor: theme.palette.background.paper,
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
  flexDirection: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
});

export const StyledScrollBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  maxHeight: '100%',
  '&::-webkit-scrollbar': {
    width: '4px',
    backgroundColor: theme.palette.primary.light,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '4px',
    border: `1px solid ${theme.palette.primary.light}`,
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  scrollbarWidth: 'thin',
  scrollbarColor: `${theme.palette.primary.main} ${theme.palette.primary.light}`,
}));
