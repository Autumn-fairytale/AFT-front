import { styled } from '@mui/material';

import { AppButton } from '@/shared';

export const HeroSearchBarFormStyled = styled('form')(() => ({
  display: 'flex',
  gap: '5px',

  width: 'fit-content',
  padding: '10px',

  background: 'white',
  borderRadius: '10px',
}));

export const HeroSearchButtonStyles = styled(AppButton)(() => ({
  height: '56px',
  width: '140px',
}));
