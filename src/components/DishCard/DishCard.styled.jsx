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

export const DishImage = styled('img')(({ isCarousel }) => ({
  width: `${isCarousel ? '200px' : '100%'}`,
  height: `${isCarousel ? '165px' : '100%'}`,
  display: 'block',
  maxWidth: '376px',
  maxHeight: '380px',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
}));

export const FavoriteButton = styled('div')(({ theme, isCarousel }) => ({
  position: 'absolute',
  top: `${isCarousel ? '5px' : '10px'}`,
  right: `${isCarousel ? '5px' : '15px'}`,
  background: `${theme.palette.background.paper}`,
  borderRadius: '20px',
}));

export const MainInfoWrapper = styled('span')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const DishName = styled('h2')(({ theme, isCarousel }) => ({
  fontSize: `${isCarousel ? '18px' : '24px'}`,
  fontWeight: `${isCarousel ? '700' : '900'}`,
  letterSpacing: '-1px',
  color: `${theme.palette.text.primary}`,
  marginLeft: `${isCarousel ? '10px' : '30px'}`,
  marginTop: `${isCarousel ? '5px' : '0px'}`,
}));

export const DishPrice = styled('h2')(({ theme, isCarousel }) => ({
  fontSize: `${isCarousel ? '20px' : '28px'}`,
  fontWeight: '900',
  letterSpacing: '0em',
  color: `${theme.palette.primary.main}`,
  marginRight: `${isCarousel ? '10px' : '30px'}`,
  marginTop: `${isCarousel ? '5px' : '30px'}`,
}));

export const DishDescription = styled('p')(({ isCarousel }) => ({
  fontFamily: 'Inter',
  fontSize: `${isCarousel ? '12px' : '14px'}`,
  fontWeight: '500',
  textAlign: 'justify',
  margin: `${isCarousel ? '-5px 10px 0 10px' : '-10px 30px 0 30px'}`,
}));

export const ButtonsWrapper = styled('div')(({ isCarousel }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: `${isCarousel ? '10px 10px 0 10px' : '10px 30px 0 30px'}`,
  gap: `${isCarousel ? '10px' : '0px'}`,
}));
