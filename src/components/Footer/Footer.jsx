import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';

import styled from '@emotion/styled';
import { SocialMediaLinksList } from '../SocialMediaLinksList/SocialMediaLinksList';
import {
  ContentWrapper,
  FooterStyled,
  FooterText,
  SocLinksAndTextWrapper,
} from './Footer.styled';
import { Logo } from './Logo';

const LogoLink = styled(Link)`
  width: 64px;

  &:focus,
  &:hover {
    & > svg {
      fill: #ffffff;
    }
  }

  & > svg {
    transition: fill 0.3s ease;
    fill: #ff7622;
  }
`;

export const Footer = () => {
  return (
    <FooterStyled>
      <Container fixed>
        <ContentWrapper>
          <LogoLink to="/" aria-label="logo" tabIndex="0">
            <Logo />
          </LogoLink>
          <SocLinksAndTextWrapper>
            <SocialMediaLinksList />
            <FooterText>Designed by AFT Team - 2023</FooterText>
          </SocLinksAndTextWrapper>
          <FooterText>&#169; All rights reserved</FooterText>
        </ContentWrapper>
      </Container>
    </FooterStyled>
  );
};
