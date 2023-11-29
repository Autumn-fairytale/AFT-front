import defaultSrc from '@/assets/images/default-dish.svg';
import { CartItemImagePropTypes } from './CartItemImage.props';
import {
  CartItemImageStyled,
  CartItemImageThumbStyled,
} from './CartItemImage.styled';

const CartItemImage = ({ src, alt, defaultSrc, ...props }) => {
  const imageSrc = src || defaultSrc;

  const errorHandler = (evt) => {
    evt.target.src = defaultSrc;
  };
  return (
    <CartItemImageThumbStyled {...props}>
      <CartItemImageStyled
        src={imageSrc}
        alt={alt}
        width={props.width}
        height={props.height}
        onError={errorHandler}
      />
    </CartItemImageThumbStyled>
  );
};

CartItemImage.propTypes = CartItemImagePropTypes;
CartItemImage.defaultProps = {
  width: 80,
  height: 80,
  borderRadius: '10px',
  defaultSrc,
};

export default CartItemImage;
