import { useCallback, useState } from 'react';

import { Box, Typography } from '@mui/material';

import debounce from 'lodash.debounce';

import { convertToMoney } from '@/helpers';
import { AppNumberInput } from '@/shared';
import {
  CartItemBodyStyled,
  CartItemStyled,
  CartItemThumbStyled,
} from './CartItem.styled';
import SpiceLevel from './SpiceLevel';

const fetch = debounce(async () => {
  console.log('Fetch');
}, 500);

const CartItem = ({ item = {}, ...props }) => {
  const { dish, count } = item;
  const [itemCount, setItemCount] = useState(() => count);

  const changeCount = useCallback(
    async (value) => {
      setItemCount(value);

      await fetch();
    },

    []
  );

  return (
    <CartItemStyled {...props}>
      <CartItemThumbStyled>
        <img src={dish.image} alt={dish.name} width={80} height={80} />
      </CartItemThumbStyled>
      <CartItemBodyStyled>
        <Typography sx={{ fontWeight: 600 }}>{dish.name}</Typography>
        <Typography sx={{ fontStyle: 'italic' }}>
          {convertToMoney(dish.price)}
        </Typography>
        <SpiceLevel value={dish.spiceLevel} sx={{ marginTop: 'auto' }} />
      </CartItemBodyStyled>
      <AppNumberInput
        value={itemCount}
        onChange={changeCount}
        sx={{ alignSelf: 'center' }}
      />
    </CartItemStyled>
  );
};

CartItem.propTypes = Box.propTypes;

export default CartItem;
