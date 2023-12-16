import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';

export const StyledOrderItemsBox = styled(Box)({
  width: '100%',
});

export const IconOrderItemsBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '0.5rem',
});

export const StyledOrderItemsIcon = styled(LocalDiningIcon)({
  marginRight: '0.5rem',
  color: 'text.secondary',
});

export const StyledOrderItemsListItem = styled(ListItem)({
  padding: '0.5rem 1rem',
  borderBottom: '1px solid #e0e0e0',
  '&:last-child': {
    borderBottom: 0,
  },
});
