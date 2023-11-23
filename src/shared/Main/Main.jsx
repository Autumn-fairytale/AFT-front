import { Container } from '@mui/material';

import { MainProps } from './Main.props';
import { MainStyled } from './Main.styled';

export const Main = ({ children }) => {
  return (
    <MainStyled>
      <Container> {children}</Container>
    </MainStyled>
  );
};

Main.propTypes = MainProps;
