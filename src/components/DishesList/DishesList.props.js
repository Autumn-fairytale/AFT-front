import PropTypes from 'prop-types';

import { DishCardPropTypes } from '../DishCard/DishCard.props';

export const DishesListPropTypes = {
  data: PropTypes.arrayOf(DishCardPropTypes.dishInfo),
  ifChef: PropTypes.bool,
};
