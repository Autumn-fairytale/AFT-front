import { useCallback, useState } from 'react';
import { MdClose } from 'react-icons/md';

import { Box, Typography } from '@mui/material';

import debounce from 'lodash.debounce';

import { route } from '@/constants';
import { convertToMoney } from '@/helpers';
import { useDeleteCartItem, useUpdateCartItemById } from '@/hooks';
import { AppImage, AppNumberInput } from '@/shared';
import { AppSpiceLevel } from '@/shared/AppSpiceLevel/AppSpiceLevel';
import { CartItemPropTypes } from './CartItem.props';
import {
  CartItemBodyStyled,
  CartItemLink,
  CartItemRemoveStyled,
  CartItemStyled,
} from './CartItem.styled';

const CartItem = ({ data, ...props }) => {
  const { dish, count } = data;
  const [itemCount, setItemCount] = useState(count);
  const { mutate: updateCart } = useUpdateCartItemById();
  const { mutate: deleteCart } = useDeleteCartItem();
  const fetch = useCallback(
    debounce(async (newCount) => {
      if (newCount === 0) {
        deleteCart(dish.id);
      } else {
        updateCart({ item: { dishId: dish.id, count: newCount } });
      }
    }, 500),
    []
  );

  const changeCount = useCallback(
    async (value) => {
      setItemCount(value);

      await fetch(value);
    },
    [fetch]
  );

  const deleteCartHandler = useCallback(
    () => deleteCart(dish.id),
    [deleteCart, dish.id]
  );

  return (
    <CartItemStyled isAvailable={dish.isAvailable} {...props}>
      <CartItemRemoveStyled
        aria-label={`delete ${dish.name}`}
        onClick={deleteCartHandler}
      >
        <MdClose />
      </CartItemRemoveStyled>
      <AppImage src={dish.image} alt={dish.name} />
      <CartItemBodyStyled>
        <CartItemLink to={`${route.DISHES}/${dish.id}`}>
          <Typography sx={{ fontWeight: 600 }}>{dish.name}</Typography>
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
    </CartItemStyled>
  );
};

CartItem.propTypes = CartItemPropTypes;

export default CartItem;
