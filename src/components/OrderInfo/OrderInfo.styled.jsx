import { Box, styled } from '@mui/material';

export const OrderInfoSectionStyled = styled('section')({
  position: 'sticky',
  top: 0,

  height: '100%',
  width: '450px',
});

export const OrderInfoChefStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',

  padding: '10px',

  backgroundColor: `${theme.palette.grey[200]}`,
  borderRadius: '10px',
}));
