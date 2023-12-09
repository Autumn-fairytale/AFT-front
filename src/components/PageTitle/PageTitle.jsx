import { PageTitleProps } from './PageTitle.props';
import { TypographyStyled } from './PageTitle.styled';

export const PageTitle = ({ children }) => {
  return <TypographyStyled variant="h4">{children}</TypographyStyled>;
};

PageTitle.propTypes = PageTitleProps;
