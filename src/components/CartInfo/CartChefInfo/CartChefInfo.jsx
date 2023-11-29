import { Link } from 'react-router-dom';

import { Avatar } from '@mui/material';

import { route } from '@/constants';
import { CartChefInfoPropTypes } from './CartChefInfo.props';
import { CartChefInfoStyled } from './CartChefInfo.styled';

const CartChefInfo = ({ data, ...props }) => {
  return (
    <CartChefInfoStyled {...props}>
      <Avatar src={data.avatar} />
      <Link href={`${route.CHEFS}/${data.id}`}>{data.name}</Link>
    </CartChefInfoStyled>
  );
};

CartChefInfo.propTypes = CartChefInfoPropTypes;

export default CartChefInfo;
