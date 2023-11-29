import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { PiHeart } from 'react-icons/pi';

import { IconButton } from '@mui/material';

import { customColors } from '@/constants';
import AppButton from '@/shared/Buttons/AppButton';
import { defaultDishCardPropTypes, DishCardPropTypes } from './DishCard.props';
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

const DishCard = ({ dishInfo, isCarousel }) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <DishCardWrapper isCarousel={isCarousel}>
      <DishImageWrapper>
        <DishImage src={dishInfo.image} alt={dishInfo.name} component="img" />
        <FavoriteButton>
          <IconButton onClick={() => setFavorite(!favorite)}>
            <PiHeart
              style={{ color: favorite ? customColors.primaryColor : '' }}
            />
          </IconButton>
        </FavoriteButton>
      </DishImageWrapper>

      <MainInfoWrapper>
        <DishName>{dishInfo.name}</DishName>
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
        />
        <AppButton
          variant="contained"
          label="Add to Cart"
          endIcon={<FiShoppingCart />}
        />
      </ButtonsWrapper>
    </DishCardWrapper>
  );
};

DishCard.propTypes = DishCardPropTypes;
DishCard.defaultProps = defaultDishCardPropTypes;

export default DishCard;
