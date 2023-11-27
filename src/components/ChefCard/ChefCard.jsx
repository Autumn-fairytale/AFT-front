import { useState } from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdStar } from 'react-icons/md';

import { IconButton } from '@mui/material';

import { customColors } from '@/constants';
import { ChefCardPropTypes } from './ChefCard.props';
import {
  ChefCardWrapper,
  ChefImage,
  ChefImageWrapper,
  ChefName,
  FavoriteButton,
  MainInfoWrapper,
  RateNumber,
} from './ChefCard.styled';

const ChefCard = ({ chefInfo, carousel }) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <ChefCardWrapper carousel={carousel}>
      <ChefImageWrapper>
        <ChefImage src={chefInfo.image} alt={chefInfo.name} component="img" />
        <FavoriteButton>
          <IconButton onClick={() => setFavorite(!favorite)}>
            <MdFavoriteBorder
              style={{ color: favorite ? customColors.primaryColor : '' }}
            />
          </IconButton>
        </FavoriteButton>
      </ChefImageWrapper>

      <MainInfoWrapper>
        <ChefName>{chefInfo.name}</ChefName>
        <RateNumber>
          {chefInfo.rate}
          <MdStar style={{ fontSize: '25px', marginLeft: '5px' }} />
        </RateNumber>
      </MainInfoWrapper>
    </ChefCardWrapper>
  );
};

ChefCard.propTypes = ChefCardPropTypes;

export default ChefCard;
