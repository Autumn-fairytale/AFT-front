import PropTypes from 'prop-types';

export const ChefCardPropTypes = {
  chefInfo: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
  }).isRequired,
};
