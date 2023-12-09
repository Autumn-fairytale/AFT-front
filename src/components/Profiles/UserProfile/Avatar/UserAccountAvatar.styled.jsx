import { Box, styled } from '@mui/material';

export const UserAvatarBoxStyled = styled(Box)({
  width: '100%',
  gridArea: 'avatar',

  display: 'grid',
  placeItems: 'center',
});

export const UserAvatarStyled = styled(Box)({
  width: '300px',
  height: '300px',
  backgroundColor: '#d3d3d3',
  borderRadius: '50%',
});
