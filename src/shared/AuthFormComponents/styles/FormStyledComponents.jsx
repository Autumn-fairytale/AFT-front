import { lighten, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import styled from '@mui/system/styled';

import { AppContainer } from '@/shared';

const navBarHeight = '64px';
const footerHeight = '89px';
export const AuthContainerStyled = styled(AppContainer)({
  display: 'grid',
  placeItems: 'center',
  minHeight: 'max-content',
  paddingTop: '1.5rem',
  paddingBottom: '1.5rem',
  height: `calc(100vh - ${navBarHeight} - ${footerHeight})`,
  overflow: 'auto',
});

export const FormWrapperStyled = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  width: 400,
  boxShadow: `0px 4px 10px ${lighten(theme.palette.text.secondary, 0.7)}`,
  padding: '2rem',
  borderRadius: '10px',
  border: `1px solid ${lighten(theme.palette.text.secondary, 0.8)}`,
  textAlign: 'center',
}));

export const TitleStyled = styled(Typography)({
  fontFamily: 'inter',
  fontWeight: 700,
});

export const SubtitleStyled = styled(Typography)(({ theme }) => ({
  fontFamily: 'inter',
  fontWeight: 500,
  marginBottom: '1.2rem',
  color: `${lighten(theme.palette.text.secondary, 0.3)}`,
}));

export const UnderButtonTextStyled = styled(Typography)(({ theme }) => ({
  color: `${lighten(theme.palette.text.secondary, 0.3)}`,
  marginRight: '0.5rem',
}));

export const RedirectLinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  ':is(:link, :visited)': {
    color: theme.palette.primary.main,
  },
}));

const submitButtonStyles = {
  width: '100%',
  marginBottom: '0.5rem',
  letterSpacing: '0.1rem',
  textTransform: 'uppercase',
};

export const signInButtonStyles = {
  marginTop: '1.5rem',
  ...submitButtonStyles,
};

export const singUpButtonStyles = {
  marginTop: '1.2rem',
  ...submitButtonStyles,
};
