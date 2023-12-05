import { Box, styled } from '@mui/material';

export const AddressFormStyled = styled(Box)({
  width: '100%',

  display: 'grid',
  gap: '10px 10px',

  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gridAutoFlow: 'row',
  gridTemplateAreas:
    '"country country city city" "street street houseNumber apartment"',
});
