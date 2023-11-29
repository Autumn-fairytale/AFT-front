import { Box } from '@mui/material';

import CartChefInfo from './CartChefInfo';
import { CartInfoPropTypes } from './CartInfo.props';
import CartItems from './CartItems';

const CartInfo = ({ data, ...props }) => {
  return (
    <Box {...props}>
      <CartChefInfo data={data.chef} />

      <CartItems data={data.items} />
    </Box>
  );
};

CartInfo.propTypes = CartInfoPropTypes;

export default CartInfo;
