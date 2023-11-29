import { Box, styled } from '@mui/material';

export const SpiceLevelStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',

  width: 'fit-content',
  padding: '5px',

  backgroundColor: `${theme.palette.grey[200]}`,
  borderRadius: '5px',
}));

SpiceLevelStyled.defaultProps = {
  component: 'ul',
};
