import { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { IoCart, IoCartOutline, IoSettingsOutline } from 'react-icons/io5';
import { PiHeart } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Box, CircularProgress, IconButton, Stack } from '@mui/material';

import { customColors } from '@/constants';
import { convertToMoney } from '@/helpers';
import {
  useGetCartItems,
  //useSingleToast,
  useUpdateCartItemById,
} from '@/hooks';
import { useAddCartItem } from '@/hooks/cart/useAddCartItem';
import { useAddFavorite } from '@/hooks/favorites/useAddFavorite';
import { useDeleteFavorite } from '@/hooks/favorites/useDeleteFavorite';
import { selectUser } from '@/redux/auth/selectors';
import AppButton from '@/shared/Buttons/AppButton';
import { DishOrderCardModal } from '../DishOrderCard/DishOrderCardModalComponents/DishOrderCardModal';
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

const DishCard = ({ dishInfo, isCarousel, isChef, favoriteDishesIds }) => {
  const [favorite, setFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const editPath = `/chef-account/dishes/edit/${dishInfo.id}`;

  const user = useSelector(selectUser);
  const userId = useSelector(selectUser)?.id;

  const dishOwnerId = dishInfo?.owner;

  const currentUserId = user?.roles[1]?.id;

  const isTryingToOrderOwnDish = dishOwnerId === currentUserId;

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const { data: cartData, isPending: isCartLoading } = useGetCartItems();

  const { mutate: updateCartItem, isPending: isUpdatingCart } =
    useUpdateCartItemById();

  const {
    mutate: addCartItem,
    isPending: isAddingItem,
    //error: ErrorAddToCard,
  } = useAddCartItem();

  // useSingleToast(ErrorAddToCard);

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

  const dishId = dishInfo?.id;
  useEffect(() => {
    const favoriteDishesFind =
      favoriteDishesIds?.favoriteDishes?.map((i) => i.id) || [];
    const foundDishes = favoriteDishesFind?.includes(dishId);
    if (foundDishes) {
      setFavorite(true);
    }
  }, [favoriteDishesIds]);
  const { mutate: addFavorite } = useAddFavorite('dishes', dishId);
  const { mutate: deleteFavorite } = useDeleteFavorite('dishes', dishId);
  const handleAddFavorites = () => {
    if (!favorite) {
      addFavorite();
      setFavorite(!favorite);
    } else {
      deleteFavorite();
      setFavorite(!favorite);
    }
  };

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

  const transformText = (text, maxLength) => {
    return text.length > maxLength
      ? text.slice(0, maxLength - 3) + '...'
      : text;
  };

  return (
    <DishCardWrapper
      isCarousel={isCarousel}
      sx={{ boxShadow: isCarousel ? 0 : 1 }}
    >
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
          ) : userId ? (
            <IconButton onClick={() => handleAddFavorites()}>
              <PiHeart
                style={{ color: favorite ? customColors.primaryColor : '' }}
              />
            </IconButton>
          ) : (
            ''
          )}
        </FavoriteButton>
      </DishImageWrapper>
      <Stack
        sx={{
          maxHeight: isCarousel ? 90 : 150,
          height: isCarousel ? 75 : 150,
        }}
      >
        <MainInfoWrapper>
          <DishName isCarousel={isCarousel}>
            {transformText(dishInfo.name, 46)}
          </DishName>
        </MainInfoWrapper>
        {!isCarousel && (
          <DishDescription isCarousel={isCarousel}>
            {transformText(dishInfo.description, 80)}
          </DishDescription>
        )}

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ maxHeight: 20 }}>
          <DishPrice isCarousel={isCarousel}>
            {convertToMoney(dishInfo.price)}
          </DishPrice>
        </Box>
      </Stack>

      <ButtonsWrapper isCarousel={isCarousel}>
        <AppButton
          sx={isCarousel ? baseStyle : nonCarouselStyle}
          variant="outlined"
          label="Learn More"
          endIcon={isCarousel ? '' : <FiChevronRight />}
          onClick={openModalHandler}
        />
        <AppButton
          sx={buttonStyle}
          variant="contained"
          label={labelContent}
          onClick={!isChef ? handleAddToCart : null}
          disabled={
            isChef ||
            isTryingToOrderOwnDish ||
            isCartLoading ||
            isAddingItem ||
            isUpdatingCart
          }
          endIcon={endIconContent}
        />
      </ButtonsWrapper>
      <DishOrderCardModal
        dishId={dishInfo.id}
        isModalOpen={isModalOpen}
        closeModalHandler={closeModalHandler}
        handleAddToCart={handleAddToCart}
      />
    </DishCardWrapper>
  );
};

DishCard.propTypes = DishCardPropTypes;
DishCard.defaultProps = defaultDishCardPropTypes;

export default DishCard;
