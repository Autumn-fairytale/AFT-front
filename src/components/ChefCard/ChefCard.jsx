import { useState } from 'react';
import { PiHeart, PiStarFill } from 'react-icons/pi';

import { IconButton } from '@mui/material';

import { customColors } from '@/constants';
import { ChefCardPropTypes, defaultChefCardPropTypes } from './ChefCard.props';
import {
  ChefCardWrapper,
  ChefImage,
  ChefImageWrapper,
  ChefName,
  FavoriteButton,
  MainInfoWrapper,
  RateNumber,
} from './ChefCard.styled';

const ChefCard = ({ chefInfo, isCarousel }) => {
  const [favorite, setFavorite] = useState(false);
  // console.log('chefInfo:', chefInfo);
  return (
    <ChefCardWrapper isCarousel={isCarousel}>
      <ChefImageWrapper>
        <ChefImage src={chefInfo.image} alt={chefInfo.name} component="img" />
        <FavoriteButton>
          <IconButton onClick={() => setFavorite(!favorite)}>
            <PiHeart
              style={{ color: favorite ? customColors.primaryColor : '' }}
            />
          </IconButton>
        </FavoriteButton>
      </ChefImageWrapper>

      <MainInfoWrapper>
        <ChefName>{chefInfo.name}</ChefName>
        <RateNumber>
          {chefInfo.rate}
          <PiStarFill style={{ fontSize: '25px', marginLeft: '5px' }} />
        </RateNumber>
      </MainInfoWrapper>
    </ChefCardWrapper>
  );
};

ChefCard.propTypes = ChefCardPropTypes;
ChefCard.defaultProps = defaultChefCardPropTypes;

export default ChefCard;
