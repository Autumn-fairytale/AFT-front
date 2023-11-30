import { useMatch } from 'react-router-dom';

import { LinkStyled } from './CustomLink.styled';

// eslint-disable-next-line react/prop-types, no-unused-vars
export const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  return (
    <LinkStyled to={to} match={match}>
      {children}
    </LinkStyled>
  );
};
