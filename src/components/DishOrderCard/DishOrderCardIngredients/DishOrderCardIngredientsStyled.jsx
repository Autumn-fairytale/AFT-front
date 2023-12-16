import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

export const DishIngredientsCard = styled(Card)(({ expanded }) => ({
  height: expanded ? 'auto' : '75px',
  '&:hover': {
    overflowY: 'auto',
  },
  '&::-webkit-scrollbar': {
    width: '4px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  scrollbarWidth: 'thin',
  scrollbarColor: 'rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.2)',
}));

export const IngredientsBox = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '4px',
});

export const ExpandButton = styled(Button)({
  textTransform: 'none',
  marginTop: '8px',
  padding: 0,
  margin: 0,
});

export const AllergyInfoBox = styled(Box)({
  borderRadius: '4px',
  marginTop: '8px',
});
