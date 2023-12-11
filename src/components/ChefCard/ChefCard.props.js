import PropTypes from 'prop-types';

export const ChefCardPropTypes = {
  chefInfo: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    rate: PropTypes.number,
  }).isRequired,
  isCarousel: PropTypes.bool,
};

export const defaultChefCardPropTypes = {
  isCarousel: false,
};
