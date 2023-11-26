import { HeroContainerStyled, HeroSectionStyled } from './Hero.styled';
import HeroSearchBar from './HeroSearchBar';

const Hero = () => {
  return (
    <HeroSectionStyled>
      <HeroContainerStyled>
        <HeroSearchBar />
      </HeroContainerStyled>
    </HeroSectionStyled>
  );
};

export default Hero;
