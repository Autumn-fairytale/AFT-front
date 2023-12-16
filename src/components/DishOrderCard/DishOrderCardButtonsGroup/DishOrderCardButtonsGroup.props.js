import PropTypes from 'prop-types';

export const DishOrderCardButtonsGroupProps = {
  quantity: PropTypes.number,
  handleQuantityChange: PropTypes.func.isRequired,
  handleAddToCart: PropTypes.func,
  isAddingItem: PropTypes.bool,
  isInCart: PropTypes.bool,
  isCartLoading: PropTypes.bool,
  isUpdatingCart: PropTypes.bool,
  handleGoToCart: PropTypes.func,
  isOpenedFromCreateOrder: PropTypes.bool,
  closeModalHandler: PropTypes.func.isRequired,
  cartItemCount: PropTypes.number,
  dishId: PropTypes.string,
  addCartItem: PropTypes.func,
  isChef: PropTypes.bool,
};
