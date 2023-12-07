import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';

export const StyledDishOrderCardWrapper = styled(Card)(() => ({
  maxWidth: 400,
  height: 685,
  maxHeight: '85vh',
}));

export const StyledDishOrderCard = styled(Card)(({ theme }) => ({
  width: '100%',
  height: 625,
  mb: 46,
  maxHeight: 'calc(85vh - 75px)',
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

export const StyledImageContainer = styled(Box)(({ overlayposition }) => ({
  position: 'fixed',
  top: `${overlayposition.top}px`,
  left: `${overlayposition.left}px`,
  width: '396px',
  height: '130px',
  backgroundColor: 'white',
  overflow: 'hidden',
  zIndex: 500,
}));

export const StyledAddDishOrderCardMedia = styled(CardMedia)(
  ({ mediascale }) => ({
    position: 'sticky',
    overflow: 'hidden',
    top: 0,
    maxHeight: '100%',
    transform: `scale(${mediascale})`,
    transition: 'transform 0.3s ease-in-out',
    transformOrigin: 'top',
    zIndex: 600,
  })
);

export const StyledCenteredColumnBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
