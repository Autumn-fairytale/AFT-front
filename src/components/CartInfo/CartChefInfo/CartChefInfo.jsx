import { Avatar } from '@mui/material';

import { route } from '@/constants';
import { CartChefInfoPropTypes } from './CartChefInfo.props';
import { CartChefInfoLink, CartChefInfoStyled } from './CartChefInfo.styled';

const CartChefInfo = ({ data, ...props }) => {
  return (
    <CartChefInfoStyled {...props}>
      <Avatar src={data.avatar} />
      <CartChefInfoLink to={`${route.CHEFS}/${data.id}`}>
        {data.name}
      </CartChefInfoLink>
    </CartChefInfoStyled>
  );
};

CartChefInfo.propTypes = CartChefInfoPropTypes;

export default CartChefInfo;
