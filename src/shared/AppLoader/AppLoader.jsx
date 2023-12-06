import { Box } from '@mui/material';

import { AppLoaderStyled } from './AppLoader.styled';

const AppLoader = (props) => {
  return <AppLoaderStyled {...props}>Loading...</AppLoaderStyled>;
};

AppLoader.propTypes = Box.propTypes;

export default AppLoader;
