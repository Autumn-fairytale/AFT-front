import PropTypes from 'prop-types';

export const DishCardPropTypes = {
  dishInfo: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isCarousel: PropTypes.bool,
  isChef: PropTypes.bool,
};

export const defaultDishCardPropTypes = {
  isCarousel: false,
  isChef: false,
};
