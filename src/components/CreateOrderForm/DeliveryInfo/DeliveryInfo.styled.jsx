import { Divider, styled } from '@mui/material';

export const DeliveryInfoSectionStyled = styled('section')({
  flexGrow: 1,
});

export const DividerStyled = styled(Divider)(() => ({
  width: '100%',
  height: '2px',

  marginTop: '20px',
  marginBottom: '10px',
}));
