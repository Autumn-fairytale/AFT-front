import { Avatar } from '@mui/material';

import { route } from '@/constants';
import { useCartTypeContext } from '@/contexts/CartTypeContext';
import { useTheme } from '@emotion/react';
import { CartChefInfoPropTypes } from './CartChefInfo.props';
import { CartChefInfoLink, CartChefInfoStyled } from './CartChefInfo.styled';
// import { useModalContext } from '@/contexts/useModalContext';

const CartChefInfo = ({ data, ...props }) => {
  const { isDefault } = useCartTypeContext();
  const theme = useTheme();

  return (
    <CartChefInfoStyled {...props} isDefault={isDefault} theme={theme}>
      <Avatar src={data.avatar} />
      <CartChefInfoLink
        to={`${route.CHEFS}/${data.id}`}
        theme={theme}
        // onClick={isDefault && useModalContext().closeModal}
      >
        {data.name}
      </CartChefInfoLink>
    </CartChefInfoStyled>
  );
};

CartChefInfo.propTypes = CartChefInfoPropTypes;

export default CartChefInfo;
