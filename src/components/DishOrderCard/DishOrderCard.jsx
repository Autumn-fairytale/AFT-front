import { useEffect, useRef, useState } from 'react';

import {
  Box,
  CardContent,
  Divider,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';

import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';

import { useGetCartItems, useUpdateCartItemById } from '@/hooks';
import { useAddCartItem } from '@/hooks/cart/useAddCartItem';
import { useFetchDish } from '@/hooks/useFetchDish';
import {
  StyledAddDishOrderCardMedia,
  StyledCenteredColumnBox,
  StyledDishOrderCard,
  StyledDishOrderCardWrapper,
  StyledImageContainer,
} from './DishOrderCard.styled';
import { DishOrderCardButtonsGroup } from './DishOrderCardButtonsGroup';
import { DishOrderCardChefLink } from './DishOrderCardChefLink';
import { DishOrderCardDescription } from './DishOrderCardDescription';
import { DishOrderCardIngredients } from './DishOrderCardIngredients';
import { DishOrderCardRating } from './DishOrderCardRating';
import { DishOrderCardReview } from './DishOrderCardReview';
import { DishOrderCardSpiceLevel } from './DishOrderCardSpiceLevel';
import { DishOrderCardTabs } from './DishOrderCardTabs';
import { DishOrderCardVeganBadge } from './DishOrderCardVeganBadge';

const DishOrderCard = ({ dishId }) => {
  const { data: cartData, isPending: isCartLoading } = useGetCartItems();
  const { mutate: updateCartItem, isPending: isUpdatingCart } =
    useUpdateCartItemById();
  const { mutate: addCartItem, isPending: isAddingItem } = useAddCartItem();

  const { data: dish = {}, isLoading } = useFetchDish(dishId);
  const owner = dish.owner;

  const cartItem = cartData?.cart.items.find(
    (item) => item.dish.id === dish.id
  );

  const isInCart = !!cartItem;
  const cartItemCount = cartItem ? cartItem.count : 0;

  const cardRef = useRef();
  const isVegan = dish?.isVegan;

  const [overlayPosition, setOverlayPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!isLoading && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();

      setOverlayPosition({ top: rect.top, left: rect.left });
    }
  }, [isLoading]);

  const [expanded, setExpanded] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [mediaScale, setMediaScale] = useState(1);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (cardRef.current) {
        const scale = Math.max(0.5, 1 - cardRef.current.scrollTop / 200);
        setMediaScale(scale);
      }
    }, 250);

    const card = cardRef.current;
    if (card) {
      card.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (card) {
        card.removeEventListener('scroll', handleScroll);
      }
      handleScroll.cancel();
    };
  }, [isLoading]);

  const handleTabChange = (_event, newValue) => {
    setTabValue(newValue);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = cartItemCount + change;

    updateCartItem({
      item: { dishId: dish.id, count: newQuantity },
    });
  };

  const handleAddToCart = () => {
    if (isInCart) {
      console.log('do something - to card');
    } else {
      addCartItem({ item: { dishId: dish.id, count: cartItemCount } });
    }
  };

  const totalWeight = dish.weight * cartItemCount;
  const totalPrice = dish.price * cartItemCount;

  return (
    dish.name &&
    dish.owner && (
      <StyledDishOrderCardWrapper raised>
        <StyledDishOrderCard ref={cardRef} raised elevation={0}>
          {isLoading && <LinearProgress />}

          <StyledImageContainer
            overlayposition={`top: ${overlayPosition.top}px; left: ${overlayPosition.left}px;`}
          />

          <StyledAddDishOrderCardMedia
            component="img"
            image={dish.image}
            alt={dish.name}
            mediascale={mediaScale}
          />

          <CardContent>
            <StyledCenteredColumnBox>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: 'bold' }}
              >
                {dish.name}
              </Typography>

              <Stack
                direction="row"
                alignItems="center"
                alignSelf="flex-start"
                gap={1}
              >
                <DishOrderCardRating />
                {isVegan && <DishOrderCardVeganBadge />}
              </Stack>
            </StyledCenteredColumnBox>

            <Stack direction="column" spacing={1}>
              <DishOrderCardChefLink
                firstName={owner.userId?.firstName}
                lastName={owner.userId?.lastName}
                id={owner.id}
              />
              <Typography
                variant="body2"
                color="text.primary"
                sx={{ fontWeight: 'bold' }}
              >
                {`${dish.cuisine} · ${dish.category}`}
              </Typography>
            </Stack>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ width: '100%' }}>
              <DishOrderCardTabs
                handleTabChange={handleTabChange}
                tabValue={tabValue}
              />
              <Box sx={{ height: 130 }}>
                {tabValue === 0 && (
                  <DishOrderCardDescription
                    expanded={expanded}
                    description={dish.description}
                    handleExpandClick={handleExpandClick}
                  />
                )}
                {tabValue === 1 && (
                  <DishOrderCardIngredients ingredients={dish.ingredients} />
                )}
              </Box>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Stack direction="row" sx={{ justifyContent: 'space-around' }}>
              <Box>
                <Typography variant="subtitle2" fontWeight={'bold'}>
                  Portion size
                </Typography>
                <Typography variant="subtitle1">
                  {dish.weight}g - {dish.price}₴
                </Typography>
              </Box>

              <Divider orientation="vertical" flexItem />
              <Box>
                <Typography variant="subtitle2" fontWeight={'bold'}>
                  Total
                </Typography>
                <Typography variant="subtitle1">
                  {totalWeight}g -{' '}
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {totalPrice.toFixed(2)}₴
                  </Typography>
                </Typography>
              </Box>
            </Stack>
            <Divider sx={{ my: 1 }} />
            <DishOrderCardSpiceLevel spiceLevel={dish.spiceLevel} />
            <Divider sx={{ my: 1 }} />

            <DishOrderCardReview />
          </CardContent>
        </StyledDishOrderCard>
        <Box sx={{ p: 1 }}>
          <DishOrderCardButtonsGroup
            quantity={cartItemCount}
            handleQuantityChange={handleQuantityChange}
            handleAddToCart={handleAddToCart}
            isAddingItem={isAddingItem}
            isInCart={isInCart}
            isCartLoading={isCartLoading}
            isUpdatingCart={isUpdatingCart}
          />
        </Box>
      </StyledDishOrderCardWrapper>
    )
  );
};
export default DishOrderCard;

DishOrderCard.propTypes = { dishId: PropTypes.string };
