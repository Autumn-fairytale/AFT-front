import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { IoCart, IoCartOutline, IoSettingsOutline } from 'react-icons/io5';
import { PiHeart } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { CircularProgress, IconButton } from '@mui/material';

import { customColors } from '@/constants';
import { useGetCartItems, useUpdateCartItemById } from '@/hooks';
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
import { StyledDishBadge } from './DishCardBadge';

const DishCard = ({ dishInfo, isCarousel, isChef }) => {
  const [favorite, setFavorite] = useState(false);

  const { mutate: addCartItem, isPending: isAddingItem } = useAddCartItem();
  const { data: cartData, isPending: isCartLoading } = useGetCartItems();
  const { mutate: updateCartItem, isPending: isUpdatingCart } =
    useUpdateCartItemById();

  const cartItem = cartData?.cart.items.find(
    (item) => item.dish.id === dishInfo.id
  );
  const isInCart = cartItem !== undefined;
  const cartItemCount = cartItem ? cartItem.count : 0;

  const handleAddToCart = () => {
    if (isInCart) {
      updateCartItem({
        item: { dishId: dishInfo.id, count: cartItemCount + 1 },
      });
    } else {
      addCartItem({ item: { dishId: dishInfo.id, count: 1 } });
    }
  };

  const editPath = `/chef-account/dishes/edit/${dishInfo.id}`;

  let labelContent;
  if (isCarousel) {
    labelContent = isInCart ? (
      <StyledDishBadge count={cartItem?.count} isсarousel={isCarousel} />
    ) : (
      <IoCart style={{ fontSize: '24px' }} />
    );
  } else {
    labelContent = isInCart ? 'In Cart' : 'Add to Cart';
  }

  const baseStyle = { fontSize: '12px', height: '36px', whiteSpace: 'nowrap' };
  const cartStyle = { backgroundColor: 'success.light' };
  const nonCarouselStyle = { width: '146px' };

  let buttonStyle = {};
  if (isCarousel) {
    buttonStyle = { ...baseStyle };
  }
  if (isInCart) {
    buttonStyle = { ...buttonStyle, ...cartStyle };
    if (!isCarousel) {
      buttonStyle = { ...buttonStyle, ...nonCarouselStyle };
    }
  }

  let endIconContent;
  if (isCarousel) {
    endIconContent = null;
  } else if (isInCart) {
    endIconContent = <StyledDishBadge count={cartItem?.count} />;
  } else if (isAddingItem) {
    endIconContent = <CircularProgress size={24} />;
  } else {
    endIconContent = <IoCartOutline style={{ fontSize: '24px' }} />;
  }

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
        <DishName isCarousel={isCarousel}>
          {dishInfo.name.length > 14
            ? dishInfo.name.slice(0, 14) + '...'
            : dishInfo.name}
        </DishName>
        <DishPrice isCarousel={isCarousel}>{dishInfo.price}₴</DishPrice>
      </MainInfoWrapper>
      <DishDescription isCarousel={isCarousel}>
        {isCarousel
          ? dishInfo.description.slice(0, 50) + '...'
          : dishInfo.description.slice(0, 80) + '...'}
      </DishDescription>

      <ButtonsWrapper isCarousel={isCarousel}>
        <AppButton
          sx={isCarousel ? baseStyle : nonCarouselStyle}
          variant="outlined"
          label="Learn More"
          endIcon={isCarousel ? '' : <FiChevronRight />}
        />
        <AppButton
          sx={buttonStyle}
          variant="contained"
          label={labelContent}
          onClick={!isChef ? handleAddToCart : null}
          disabled={isChef || isCartLoading || isAddingItem || isUpdatingCart}
          endIcon={endIconContent}
        />
      </ButtonsWrapper>
    </DishCardWrapper>
  );
};

DishCard.propTypes = DishCardPropTypes;
DishCard.defaultProps = defaultDishCardPropTypes;

export default DishCard;
