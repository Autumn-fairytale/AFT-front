import { Box, styled } from '@mui/material';

export const UserAccountGridStyled = styled(Box)({
  width: '100%',
  height: '90vh',

  display: 'grid',
  gap: '1.5rem',

  padding: '1.5rem 0',

  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gridAutoFlow: 'row',
  gridTemplateAreas: '"avatar fields " "buttons fields"',
});

export const UserButtonsBoxStyled = styled(Box)({
  width: '100%',
  gridArea: 'buttons',
});
