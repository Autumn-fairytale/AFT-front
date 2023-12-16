import PropTypes from 'prop-types';

export const DishOrderCardProps = {
  dishId: PropTypes.string,
  handleGoToCart: PropTypes.func,
  closeModalHandler: PropTypes.func.isRequired,
};
