import { Box, Container, Link, styled } from '@mui/material';

export const OverviewContainerStyled = styled(Container)(() => ({}));

export const OverviewHeaderWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const OverviewSeeAllLinkStyled = styled(Link)(() => ({
  fontSize: '20px',
  textDecoration: 'underline !important',
}));
