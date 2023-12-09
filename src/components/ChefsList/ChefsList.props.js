import PropTypes from 'prop-types';

import { ChefCardPropTypes } from '../ChefCard/ChefCard.props';

export const ChefListPropTypes = {
  data: PropTypes.arrayOf(ChefCardPropTypes),
};
