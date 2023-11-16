import { styled } from '@mui/material';

export const ChefCardWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '350px',
  height: '400px',
  borderRadius: '20px',
  overflow: 'hidden', // Додайте це, щоб обрізати зайві частини зображення за межами картки
  background: `${theme.palette.background.paper}`,
  boxShadow: '13px 13px 30px 0px #00000026',
}));

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

export const FavoriteButton = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  right: '15px',
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

export const ChefName = styled('h2')(({ theme }) => ({
  fontSize: '24px',
  fontWeight: '600',
  letterSpacing: '-1px',
  color: `${theme.palette.primary.superLight}`,
  zIndex: '1',
}));

export const RateNumber = styled('span')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '25px',
  fontSize: '18px',
  fontWeight: '600',
  letterSpacing: '-1px',
  color: `${theme.palette.primary.superLight}`,
  zIndex: '1',
}));
