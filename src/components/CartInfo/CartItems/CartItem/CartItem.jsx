import { useCallback, useMemo, useState } from 'react';
import { MdClose } from 'react-icons/md';

import { Typography } from '@mui/material';

import debounce from 'lodash.debounce';

import { route } from '@/constants';
import { useCartTypeContext } from '@/contexts/CartTypeContext';
import { convertToMoney } from '@/helpers';
import {
  useCartOptimisticUpdate,
  useDeleteCartItem,
  useUpdateCartItemById,
} from '@/hooks';
import { AppNumberInput } from '@/shared';
import { useTheme } from '@emotion/react';
import { CartItemPropTypes } from './CartItem.props';
import {
  CartItemBodyStyled,
  CartItemLink,
  CartItemRemoveStyled,
  CartItemStyled,
} from './CartItem.styled';
import {
  CartChefAvatar,
  CartItemDescription,
  CartItemTags,
} from './CartItemDetails';

const CartItem = ({ data, ...props }) => {
  const { dish, count } = data;
  const { name, price, description, isAvailable } = dish;
  const [itemCount, setItemCount] = useState(count);

  const { isDefault } = useCartTypeContext();
  const theme = useTheme();

  const { mutate: updateCart } = useUpdateCartItemById();
  const { mutate: deleteCart } = useDeleteCartItem();
  const optimisticUpdate = useCartOptimisticUpdate();

  const fetch = useMemo(
    () =>
      debounce(async (newCount) => {
        console.log('Debounce');
        if (newCount === 0) {
          deleteCart(dish.id);
        } else {
          updateCart({ item: { dishId: dish.id, count: newCount } });
        }
      }, 400),
    [deleteCart, dish.id, updateCart]
  );

  const changeCount = useCallback(
    async (value) => {
      setItemCount(value);

      optimisticUpdate(dish.id, value);

      await fetch(value);
    },
    [dish.id, fetch, optimisticUpdate]
  );

  const deleteCartHandler = useCallback(() => {
    deleteCart(dish.id);
    optimisticUpdate(dish.id, 0);
  }, [deleteCart, dish.id, optimisticUpdate]);

  return (
    <CartItemStyled isAvailable={isAvailable} isDefault={isDefault} {...props}>
      <CartItemRemoveStyled
        aria-label={`delete ${name}`}
        onClick={deleteCartHandler}
      >
        <MdClose />
      </CartItemRemoveStyled>

      <CartChefAvatar isDefault={isDefault} dish={dish} />

      <CartItemBodyStyled>
        <CartItemLink to={`${route.DISHES}/${dish.id}`}>
          <Typography sx={{ fontWeight: 600 }}>{name}</Typography>
        </CartItemLink>
        <Typography sx={{ fontStyle: 'italic' }}>
          {convertToMoney(price)}
        </Typography>

        <CartItemDescription isDefault={isDefault} description={description} />

        <CartItemTags isDefault={isDefault} dish={dish} theme={theme} />
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
