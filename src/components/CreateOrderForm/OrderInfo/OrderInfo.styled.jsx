import { Box, Paper, styled } from '@mui/material';

export const OrderInfoSectionStyled = styled(Paper)({
  position: 'sticky',
  top: 0,

  flexShrink: 0,

  height: '100%',
  width: '450px',
  padding: '20px',
});

Paper.defaultProps = { component: 'section' };

export const OrderInfoChefStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',

  padding: '10px',

  backgroundColor: `${theme.palette.grey[200]}`,
  borderRadius: '10px',
}));
