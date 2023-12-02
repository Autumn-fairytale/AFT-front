import { styled } from '@mui/material';

export const ChefInfoWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
}));

export const InfoWrapper = styled('div')(() => ({
  margin: '0 100px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  justifyItems: 'center',
}));

export const ChefFieldsWrapper = styled('div')(() => ({
  width: '620px',
  margin: 'auto',
}));

export const FieldWrapper = styled('div')(() => ({
  display: 'flex',
  gap: '20px',
}));
