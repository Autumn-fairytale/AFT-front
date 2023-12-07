import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';

export const StyledDishOrderCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  height: 685,
  maxHeight: '85vh',
  overflow: 'scroll',
  position: 'relative',
  overflowX: 'hidden',
  '&::-webkit-scrollbar': {
    width: '4px',
    backgroundColor: theme.palette.primary.light,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
  },
  scrollbarWidth: 'thin',
  scrollbarColor: `${theme.palette.primary.main} ${theme.palette.primary.light}`,
}));

export const StyledImageContainer = styled(Box)(({ overlayPosition }) => ({
  position: 'fixed',
  top: `${overlayPosition.top}px`,
  left: `${overlayPosition.left}px`,
  width: '396px',
  height: '130px',
  backgroundColor: 'white',
  overflow: 'hidden',
  zIndex: 500,
}));

export const StyledAddDishOrderCardMedia = styled(CardMedia)(
  ({ mediaScale }) => ({
    position: 'sticky',
    overflow: 'hidden',
    top: 0,
    maxHeight: '100%',
    transform: `scale(${mediaScale})`,
    transition: 'transform 0.3s ease-in-out',
    transformOrigin: 'top',
    zIndex: 600,
  })
);
