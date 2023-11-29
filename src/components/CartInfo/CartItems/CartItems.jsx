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
          <li key={item.dish.id}>
            <CartItem data={item} />
            {index < arr.length - 1 && <Divider />}
          </li>
        ))
      )}
      {}
    </Box>
  );
};

CartItems.propTypes = CartItemsPropTypes;

export default CartItems;
