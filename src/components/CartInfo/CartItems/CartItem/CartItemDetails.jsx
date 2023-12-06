import PropTypes from 'prop-types';

import { AppImage } from '@/shared';
import { AppSpiceLevel } from '@/shared/AppSpiceLevel/AppSpiceLevel';
import { CartItemPropTypes } from './CartItem.props';
import {
  CartItemDescStyled,
  CartItemTagBlockStyled,
  CartItemTagStyled,
} from './CartItem.styled';

export const CartChefAvatar = ({ isDefault, dish }) => {
  const { image, name } = dish;
  return (
    <AppImage
      src={image}
      alt={name}
      {...(isDefault ? { width: 150, height: 150 } : {})}
    />
  );
};

CartChefAvatar.propTypes = {
  isDefault: PropTypes.bool.isRequired,
  dish: CartItemPropTypes.data.dish,
};

export const CartItemDescription = ({ isDefault, description }) =>
  isDefault ? <CartItemDescStyled>{description}</CartItemDescStyled> : null;

CartItemDescription.propTypes = {
  isDefault: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};

export const CartItemTags = ({ isDefault, dish, theme }) => {
  const { spiceLevel, cuisine, category } = dish;
  return (
    <CartItemTagBlockStyled isDefault={isDefault}>
      {spiceLevel > 0 && <AppSpiceLevel value={spiceLevel} />}
      {isDefault &&
        [cuisine, category].map((tag) => (
          <CartItemTagStyled theme={theme} key={tag}>
            {tag}
          </CartItemTagStyled>
        ))}
    </CartItemTagBlockStyled>
  );
};

CartItemTags.propTypes = {
  isDefault: PropTypes.bool.isRequired,
  dish: CartItemPropTypes.data.dish,
  theme: PropTypes.object.isRequired,
};
