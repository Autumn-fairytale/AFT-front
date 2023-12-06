import { Fragment } from 'react';

import { Box, Divider, Typography } from '@mui/material';

import CartItem from './CartItem';
import { CartItemsPropTypes } from './CartItems.props';

const CartItems = ({ data, ...props }) => {
  return (
    <Box component="ul" {...props}>
      {data?.length === 0 ? (
        <Typography>{"You didn't choose any dishes"}</Typography>
      ) : (
        data.map((item, index, arr) => (
          <Fragment key={item.dish.id}>
            <CartItem component="li" data={item} />
            {index < arr.length - 1 && <Divider />}
          </Fragment>
        ))
      )}
      {}
    </Box>
  );
};

CartItems.propTypes = CartItemsPropTypes;

export default CartItems;
