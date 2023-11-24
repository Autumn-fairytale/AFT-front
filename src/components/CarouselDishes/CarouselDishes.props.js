import PropTypes from 'prop-types';

import { DishCardPropTypes } from '../DishCard/DishCard.props';

export const CarouselDishesPropTypes = {
  data: PropTypes.arrayOf(DishCardPropTypes.dishInfo).isRequired,
};
