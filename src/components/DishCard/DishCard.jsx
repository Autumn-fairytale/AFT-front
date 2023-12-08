import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { PiHeart } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { IconButton } from '@mui/material';

import { customColors } from '@/constants';
import { useAddCartItem } from '@/hooks/cart/useAddCartItem';
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

const DishCard = ({ dishInfo, isCarousel, isChef }) => {
  const [favorite, setFavorite] = useState(false);
  const { mutate: addCartItem, isLoading } = useAddCartItem();

  const handleAddToCart = () => {
    const cartItemData = {
      item: {
        dishId: dishInfo._id,
        count: 1,
      },
    };

    addCartItem(cartItemData);
  };

  const editPath = `/chef-account/dishes/edit/${dishInfo.id}`;

  return (
    <DishCardWrapper isCarousel={isCarousel}>
      <DishImageWrapper>
        <DishImage
          isCarousel={isCarousel}
          src={dishInfo.image}
          alt={dishInfo.name}
          component="img"
          width="300"
          height="300"
        />
        <FavoriteButton isCarousel={isCarousel}>
          {isChef ? (
            <Link to={editPath}>
              <IconButton>
                <IoSettingsOutline />
              </IconButton>
            </Link>
          ) : (
            <IconButton onClick={() => setFavorite(!favorite)}>
              <PiHeart
                style={{ color: favorite ? customColors.primaryColor : '' }}
              />
            </IconButton>
          )}
        </FavoriteButton>
      </DishImageWrapper>

      <MainInfoWrapper>
        <DishName isCarousel={isCarousel}>{dishInfo.name}</DishName>
        <DishPrice isCarousel={isCarousel}>{dishInfo.price}$</DishPrice>
      </MainInfoWrapper>
      <DishDescription isCarousel={isCarousel}>
        {isCarousel
          ? dishInfo.description.slice(0, 50) + '...'
          : dishInfo.description.slice(0, 80) + '...'}
      </DishDescription>
      <ButtonsWrapper isCarousel={isCarousel}>
        <AppButton
          sx={
            isCarousel
              ? { fontSize: '12px', height: '36px', whiteSpace: 'nowrap' }
              : ''
          }
          variant="outlined"
          label="Learn More"
          endIcon={isCarousel ? '' : <FiChevronRight />}
        />
        <AppButton
          sx={
            isCarousel
              ? { fontSize: '12px', height: '36px', whiteSpace: 'nowrap' }
              : ''
          }
          variant="contained"
          label={
            isCarousel ? (
              <FiShoppingCart style={{ fontSize: '18px' }} />
            ) : (
              'Add to Cart'
            )
          }
          onClick={!isChef ? handleAddToCart : null}
          endIcon={isCarousel ? '' : <FiShoppingCart />}
          disabled={isChef || isLoading}
        />
      </ButtonsWrapper>
    </DishCardWrapper>
  );
};

DishCard.propTypes = DishCardPropTypes;
DishCard.defaultProps = defaultDishCardPropTypes;

export default DishCard;
