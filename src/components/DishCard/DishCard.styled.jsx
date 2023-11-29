import { styled } from '@mui/material';

export const DishCardWrapper = styled('div')(({ theme, isCarousel }) => ({
  position: 'relative',
  width: `${isCarousel ? '200px' : '100%'}`,
  height: `${isCarousel ? '300px' : '100%'}`,
  maxWidth: '376px',
  maxHeight: '585px',
  borderRadius: '20px',
  background: `${theme.palette.background.paper}`,
}));

export const DishImageWrapper = styled('div')(() => ({
  position: 'relative',
}));

export const DishImage = styled('img')(() => ({
  display: 'block',
  maxWidth: '376px',
  maxHeight: '380px',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
}));

export const FavoriteButton = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  right: '15px',
  background: `${theme.palette.background.paper}`,
  borderRadius: '20px',
}));

export const MainInfoWrapper = styled('span')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const DishName = styled('h2')(({ theme }) => ({
  fontSize: '24px',
  fontWeight: '900',
  letterSpacing: '-1px',
  color: `${theme.palette.text.primary}`,
  marginLeft: '30px',
}));

export const DishPrice = styled('h2')(({ theme }) => ({
  fontSize: '28px',
  fontWeight: '900',
  letterSpacing: '0em',
  color: `${theme.palette.primary.main}`,
  marginRight: '30px',
  marginTop: '15px',
}));

export const DishDescription = styled('p')(() => ({
  fontFamily: 'Inter',
  fontSize: '14px',
  fontWeight: '500',
  textAlign: 'justify',
  margin: '-10px 30px 0 30px',
}));

export const ButtonsWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '10px 30px 0 30px',
}));
