import { Box, styled } from '@mui/material';

export const UserAccountGridStyled = styled(Box)({
  height: 'max-content',
  display: 'grid',
  rowGap: '1.5rem',
  columnGap: '2.5rem',
  width: 'min-content',

  padding: '2.5rem 0 1.5rem',
  margin: '0 auto ',

  gridTemplateColumns: '350px 450px',
  gridTemplateRows: '380px 1fr',
  gridAutoFlow: 'row',
  gridTemplateAreas: '"avatar fields " "buttons fields"',

  '& form': {
    position: 'relative',
  },
});
