import { MainProps } from './Main.props';
import { MainStyled } from './Main.styled';

export const Main = ({ children }) => {
  return <MainStyled>{children}</MainStyled>;
};

Main.propTypes = MainProps;
