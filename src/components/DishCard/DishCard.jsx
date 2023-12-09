import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { IoCart, IoCartOutline, IoSettingsOutline } from 'react-icons/io5';
import { PiHeart } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { CircularProgress, IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';

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
        <DishPrice isCarousel={isCarousel}>{dishInfo.price}₴</DishPrice>
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
              ? {
                  fontSize: '12px',
                  height: '36px',
                  whiteSpace: 'nowrap',
                }
              : { width: '146px' }
          }
          variant="outlined"
          label="Learn More"
          endIcon={isCarousel ? '' : <FiChevronRight />}
        />
        <AppButton
          sx={{
            ...(isCarousel
              ? {
                  fontSize: '12px',
                  height: '36px',
                  whiteSpace: 'nowrap',
                }
              : {}),
            ...(isInCart && {
              backgroundColor: 'success.light',
              width: '146px',
            }),
          }}
          variant="contained"
          label={
            isCarousel ? (
              <IoCart style={{ fontSize: '24px' }} />
            ) : isInCart ? (
              'In Cart'
            ) : (
              'Add to Cart'
            )
          }
          onClick={!isChef ? handleAddToCart : null}
          disabled={isChef || isCartLoading || isAddingItem || isUpdatingCart}
          endIcon={
            isCarousel ? (
              ''
            ) : isInCart ? (
              <Badge
                badgeContent={cartItem?.count}
                color="primary"
                sx={{
                  '& .MuiBadge-badge': {
                    color: 'white',
                    fontSize: 16,
                    padding: '0 6px',
                    right: -3,
                    top: 8,
                  },
                  mr: '16px',
                }}
              >
                <IoCart style={{ fontSize: '24px' }} />
              </Badge>
            ) : isAddingItem ? (
              <CircularProgress size={24} />
            ) : (
              <IoCartOutline style={{ fontSize: '24px' }} />
            )
          }
        />
      </ButtonsWrapper>
    </DishCardWrapper>
  );
};

DishCard.propTypes = DishCardPropTypes;
DishCard.defaultProps = defaultDishCardPropTypes;

export default DishCard;
