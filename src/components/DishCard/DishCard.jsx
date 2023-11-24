import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { PiHeart } from 'react-icons/pi';

import { IconButton } from '@mui/material';

import PropTypes from 'prop-types';

import { customColors } from '@/constants';
import AppButton from '@/shared/Buttons/AppButton';
import {
  ButtonsWrapper,
  DishCardWrapper,
  DishDescription,
  DishImage,
  DishImageWrapper,
  DishName,
  DishPrice,
  FavoriteButton,
  MainInfoWrapper,
} from './DishCard.styled';

const DishCard = ({ dishInfo }) => {
  const [favorite, setFavorite] = useState(false);
  function handleClick() {
    //Required function
  }
  return (
    <DishCardWrapper>
      <DishImageWrapper>
        <DishImage
          src={dishInfo.image}
          alt={dishInfo.dishname}
          component="img"
        />
        <FavoriteButton>
          <IconButton onClick={() => setFavorite(!favorite)}>
            <PiHeart
              style={{ color: favorite ? customColors.primaryColor : '' }}
            />
          </IconButton>
        </FavoriteButton>
      </DishImageWrapper>

      <MainInfoWrapper>
        <DishName>{dishInfo.dishname}</DishName>
        <DishPrice>{dishInfo.price}$</DishPrice>
      </MainInfoWrapper>
      <DishDescription>
        {dishInfo.description.slice(0, 90) + '...'}
      </DishDescription>
      <ButtonsWrapper>
        <AppButton
          variant="outlined"
          label="Learn More"
          endIcon={<FiChevronRight />}
          onClick={handleClick}
        />
        <AppButton
          variant="contained"
          label="Add to Cart"
          endIcon={<FiShoppingCart />}
          onClick={handleClick}
        />
      </ButtonsWrapper>
    </DishCardWrapper>
  );
};

DishCard.propTypes = {
  dishInfo: PropTypes.shape({
    image: PropTypes.string,
    dishname: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default DishCard;
