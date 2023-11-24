import PropTypes from 'prop-types';

import { ChefCardPropTypes } from '../ChefCard/ChefCard.props';

export const CarouselChefsPropTypes = {
  data: PropTypes.arrayOf(ChefCardPropTypes.chefInfo).isRequired,
};
