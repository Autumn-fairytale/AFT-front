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
        <DishImage
          isCarousel={isCarousel}
          src={dishInfo.image}
          alt={dishInfo.name}
          component="img"
        />
        <FavoriteButton isCarousel={isCarousel}>
          <IconButton onClick={() => setFavorite(!favorite)}>
            <PiHeart
              style={{ color: favorite ? customColors.primaryColor : '' }}
            />
          </IconButton>
        </FavoriteButton>
      </DishImageWrapper>

      <MainInfoWrapper>
        <DishName isCarousel={isCarousel}>{dishInfo.name}</DishName>
        <DishPrice isCarousel={isCarousel}>{dishInfo.price}$</DishPrice>
      </MainInfoWrapper>
      <DishDescription isCarousel={isCarousel}>
        {isCarousel
          ? dishInfo.description.slice(0, 50) + '...'
          : dishInfo.description.slice(0, 90) + '...'}
      </DishDescription>
      <ButtonsWrapper isCarousel={isCarousel}>
        <AppButton
          style={
            isCarousel
              ? { fontSize: '12px', height: '36px', whiteSpace: 'nowrap' }
              : ''
          }
          variant="outlined"
          label="Learn More"
          endIcon={isCarousel ? '' : <FiChevronRight />}
        />
        <AppButton
          style={
            isCarousel
              ? { fontSize: '12px', height: '36px', whiteSpace: 'nowrap' }
              : ''
          }
          variant="contained"
          label={<FiShoppingCart style={{ fontSize: '18px' }} />}
          //"Add to Cart"
          endIcon={isCarousel ? '' : <FiShoppingCart />}
        />
      </ButtonsWrapper>
    </DishCardWrapper>
  );
};

DishCard.propTypes = DishCardPropTypes;
DishCard.defaultProps = defaultDishCardPropTypes;

export default DishCard;
