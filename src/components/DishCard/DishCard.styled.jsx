import { styled } from '@mui/material';

export const DishCardWrapper = styled('div')(({ theme, isCarousel }) => ({
  position: 'relative',
  width: `${isCarousel ? '200px' : '336px'}`,
  height: `${isCarousel ? '300px' : '525px'}`,
  borderRadius: '20px',
  background: `${theme.palette.background.paper}`,
}));

export const DishImageWrapper = styled('div')(() => ({
  position: 'relative',
}));

export const DishImage = styled('img')(({ isCarousel }) => ({
  width: `${isCarousel ? '200px' : '336px'}`,
  height: `${isCarousel ? '165px' : '336px'}`,
  display: 'block',
  // maxWidth: '376px',
  // maxHeight: '380px',
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
  margin: `${isCarousel ? '5px 10px' : '10px 20px'}`,
}));

export const DishPrice = styled('h2')(({ theme, isCarousel }) => ({
  fontSize: `${isCarousel ? '20px' : '28px'}`,
  fontWeight: '900',
  letterSpacing: '0em',
  color: `${theme.palette.primary.main}`,
  margin: `${isCarousel ? '5px 10px' : '8px 20px'}`,
}));

export const DishDescription = styled('p')(({ isCarousel }) => ({
  fontFamily: 'Inter',
  fontSize: `${isCarousel ? '12px' : '14px'}`,
  fontWeight: '500',
  textAlign: 'justify',
  margin: `${isCarousel ? '-5px 10px 0 10px' : '-10px 20px 0 20px'}`,
}));

export const ButtonsWrapper = styled('div')(({ isCarousel }) => ({
  display: 'flex',
  position: 'absolute',
  bottom: '15px',
  justifyContent: 'space-between',
  margin: `${isCarousel ? '10px 10px 0 10px' : '10px 20px 0 20px'}`,
  gap: `${isCarousel ? '10px' : '2px'}`,
}));
