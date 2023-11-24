import { useState } from 'react';
import { PiHeart, PiStarFill } from 'react-icons/pi';

import { IconButton } from '@mui/material';

import PropTypes from 'prop-types';

import { customColors } from '@/constants';
import {
  ChefCardWrapper,
  ChefImage,
  ChefImageWrapper,
  ChefName,
  FavoriteButton,
  MainInfoWrapper,
  RateNumber,
} from './ChefCard.styled';

const ChefCard = ({ chefInfo }) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <ChefCardWrapper>
      <ChefImageWrapper>
        <ChefImage src={chefInfo.avatar} alt={chefInfo.name} component="img" />
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

ChefCard.propTypes = {
  chefInfo: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    rate: PropTypes.number,
  }).isRequired,
};

export default ChefCard;
