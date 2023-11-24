import PropTypes from 'prop-types';

import { ChefCardPropTypes } from '../ChefCard/ChefCard.props';
import { DishCardPropTypes } from '../DishCard/DishCard.props';

export const OverviewPropTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['dish', 'chef']).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([
      DishCardPropTypes.dishInfo,
      ChefCardPropTypes.chefInfo,
    ])
  ).isRequired,
};
