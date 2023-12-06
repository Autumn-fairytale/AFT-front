import { useCallback, useEffect, useMemo, useState } from 'react';

import { Box, Typography } from '@mui/material';

import debounce from 'lodash.debounce';

import { route } from '@/constants';
import { convertToMoney } from '@/helpers';
import {
  useCartOptimisticUpdate,
  useDeleteCartItem,
  useUpdateCartItemById,
} from '@/hooks';
import { AppImage, AppNumberInput } from '@/shared';
import { AppSpiceLevel } from '@/shared/AppSpiceLevel/AppSpiceLevel';
import { CartItemPropTypes } from './CartItem.props';
import {
  CartItemBodyStyled,
  CartItemContainer,
  CartItemLink,
  CartItemStyled,
} from './CartItem.styled';
import CartItemRemoveButton from './CartItemRemoveButton';

const CartItem = ({ data, ...props }) => {
  const { dish, count } = data;
  const [itemCount, setItemCount] = useState(count);

  const { mutate: updateCart } = useUpdateCartItemById();
  const { mutate: deleteCart } = useDeleteCartItem();
  const optimisticUpdate = useCartOptimisticUpdate();

  const fetch = useMemo(
    () =>
      debounce(async (newCount) => {
        if (newCount === 0) {
          deleteCart(dish.id);
        } else {
          updateCart({ item: { dishId: dish.id, count: newCount } });
        }
      }, 400),
    [deleteCart, dish.id, updateCart]
  );

  const changeCount = useCallback(
    (value) => {
      setItemCount(value);
      optimisticUpdate(dish.id, value);
      fetch(value);
    },
    [dish.id, fetch, optimisticUpdate]
  );

  useEffect(() => {
    setItemCount(count);
  }, [count]);

  return (
    <CartItemStyled {...props}>
      <CartItemRemoveButton name={dish.name} id={dish.id} />
      <CartItemContainer isAvailable={dish.isAvailable}>
        <AppImage src={dish.image} alt={dish.name} />
        <CartItemBodyStyled>
          <CartItemLink to={`${route.DISHES}/${dish.id}`}>
            <Typography noWrap={true} sx={{ width: '170px', fontWeight: 600 }}>
              {dish.name}
            </Typography>
          </CartItemLink>
          <Typography sx={{ fontStyle: 'italic' }}>
            {convertToMoney(dish.price)}
          </Typography>

          {dish.spiceLevel > 0 && (
            <Box sx={{ marginTop: 'auto' }}>
              <AppSpiceLevel value={dish.spiceLevel} />
            </Box>
          )}
        </CartItemBodyStyled>
        <AppNumberInput
          value={itemCount}
          onChange={changeCount}
          sx={{ alignSelf: 'center' }}
        />
      </CartItemContainer>
    </CartItemStyled>
  );
};

CartItem.propTypes = CartItemPropTypes;

export default CartItem;
