import { useCallback, useState } from 'react';
import { MdClose } from 'react-icons/md';

import { Box, Typography } from '@mui/material';

import debounce from 'lodash.debounce';

import { route } from '@/constants';
import { convertToMoney } from '@/helpers';
import { AppImage, AppNumberInput } from '@/shared';
import { AppSpiceLevel } from '@/shared/AppSpiceLevel/AppSpiceLevel';
import { CartItemPropTypes } from './CartItem.props';
import {
  CartItemBodyStyled,
  CartItemLink,
  CartItemRemoveStyled,
  CartItemStyled,
} from './CartItem.styled';

const fetch = debounce(async () => {
  console.log('Fetch');
}, 500);

const CartItem = ({ data, ...props }) => {
  const { dish, count } = data;
  const [itemCount, setItemCount] = useState(() => count);

  const changeCount = useCallback(
    async (value) => {
      setItemCount(value);

      await fetch();
    },

    []
  );

  return (
    <CartItemStyled isAvailable={dish.isAvailable} {...props}>
      <CartItemRemoveStyled aria-label={`delete ${dish.name}`}>
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
