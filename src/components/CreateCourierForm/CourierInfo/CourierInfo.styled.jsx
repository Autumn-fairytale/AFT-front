import { styled } from '@mui/material';

export const CourierInfoWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const InfoWrapper = styled('div')(() => ({
  margin: '0 100px',
}));

export const CourierFieldsWrapper = styled('div')(() => ({
  width: '620px',
  margin: 'auto',
}));

export const FieldWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '10px',
}));
