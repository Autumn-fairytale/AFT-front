import { PageTitleProps } from './PageTitle.props';
import { TypographyStyled } from './PageTitle.styled';

export const PageTitle = ({ children }) => {
  return <TypographyStyled variant="h5">{children}</TypographyStyled>;
};

PageTitle.propTypes = PageTitleProps;
