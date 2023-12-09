import { Box, lighten, styled, Typography } from '@mui/material';

import { AppButton } from '@/shared';

export const UserFieldsBoxStyled = styled(Box)({
  width: '100%',
  maxWidth: '450px',
  gridArea: 'fields',
  textAlign: 'right',
});

export const FieldGroupsStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const UserFieldsGroupStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '1.1rem 1.5rem',
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  borderRadius: '6px',
}));

export const GroupHeaderStyled = styled(Typography)(({ theme }) => ({
  color: lighten(theme.palette.text.secondary, 0.4),
  fontSize: '1.2rem',
  fontWeight: '600',
  fontFamily: 'Inter',
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: '0.02rem',
  wordSpacing: '0.5rem',
  marginBottom: 3,
}));

export const EditAccountButtonStyled = styled(AppButton)({
  marginTop: '1rem',
  width: '220px',
});
