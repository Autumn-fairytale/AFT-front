import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';

import { scrollbarStyles } from '@/components/NotificationToast/helpers/scrollbarStyles';

export const StyledDishOrderCardWrapper = styled(Card)(() => ({
  minWidth: 400,
  maxWidth: 400,
  height: 785,
  maxHeight: '85vh',
}));

export const StyledDishOrderCard = styled(Card)(({ theme }) => ({
  width: '100%',
  height: 725,
  mb: 46,
  maxHeight: 'calc(85vh - 75px)',
  ...scrollbarStyles(theme),
}));

export const StyledImageContainer = styled(Box)(() => {
  return {
    position: 'fixed',
    width: '396px',
    height: '130px',
    backgroundColor: 'white',
    overflow: 'hidden',
    zIndex: 500,
    borderRadius: 5,
  };
});

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
    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)',
    borderRadius: 4,
  })
);

export const StyledCenteredColumnBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
