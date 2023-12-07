import { AppImage } from '@/shared';
import { AppSpiceLevel } from '@/shared/AppSpiceLevel/AppSpiceLevel';
import {
  CartDishImagePropTypes,
  CartItemDescriptionPropTypes,
  CartItemTagsPropTypes,
} from './CartItemDetails.props';
import {
  CartItemDescStyled,
  CartItemTagBlockStyled,
  CartItemTagStyled,
} from './CartItemDetails.styled';

// CHEF AVATAR
export const CartDishImage = ({ isDefault, dish }) => {
  const { image, name } = dish;
  return (
    <AppImage
      src={image}
      alt={name}
      {...(isDefault ? { width: 150, height: 150 } : {})}
    />
  );
};

CartDishImage.propTypes = CartDishImagePropTypes;

// DISH DESCRIPTION
export const CartItemDescription = ({ isDefault, description }) =>
  isDefault ? <CartItemDescStyled>{description}</CartItemDescStyled> : null;

CartItemDescription.propTypes = CartItemDescriptionPropTypes;

// SPICE LEVEL, CATEGORY, CUISINE
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

CartItemTags.propTypes = CartItemTagsPropTypes;
