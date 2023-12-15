import { styled } from '@mui/material';

export const ChefCardWrapper = styled('div')(({ theme, isCarousel }) => {
  return {
    boxShadow: isCarousel ? 0 : 1,
    position: 'relative',
    width: `${isCarousel ? '200px' : '350px'}`,
    height: `${isCarousel ? '300px' : '400px'}`,
    borderRadius: '20px',
    overflow: 'hidden',
    background: `${theme.palette.background.paper}`,
  };
});

export const ChefImageWrapper = styled('div')(() => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: '20px',
}));

export const ChefImage = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '20px',
}));

export const FavoriteButton = styled('div')(({ theme, isCarousel }) => ({
  position: 'absolute',
  top: '10px',
  right: isCarousel ? '10px' : '15px',
  background: `${theme.palette.background.paper}`,
  borderRadius: '20px',
}));

export const MainInfoWrapper = styled('span')(() => ({
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 20px',
  boxSizing: 'border-box',
  background:
    'linear-gradient(rgba(0, 0, 0, 0.009), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))',
}));

export const ChefName = styled('h2')(({ theme, isCarousel }) => ({
  fontSize: isCarousel ? '20px' : '24px',
  fontWeight: '600',
  letterSpacing: '-1px',
  color: theme.palette.primary.superLight,
  zIndex: '1',
}));

export const RateNumber = styled('span')(({ theme, isCarousel }) => ({
  position: 'absolute',
  bottom: isCarousel ? '0px' : '3px',
  right: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '5px',
  fontSize: isCarousel ? '18px' : '18px',
  fontWeight: '600',
  color: `${theme.palette.primary.superLight}`,
  zIndex: '1',
}));
