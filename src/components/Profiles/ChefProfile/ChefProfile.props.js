import PropTypes from 'prop-types';

export const ChefProfilePropTypes = {
  chefInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
    address: PropTypes.shape({
      country: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      street: PropTypes.string,
      houseNumber: PropTypes.string,
      apartment: PropTypes.string,
    }),
    accountStatus: PropTypes.string,
    certificate: PropTypes.string.isRequired,
    rate: PropTypes.number,
  }),
  isChef: PropTypes.bool,
  isCarousel: PropTypes.bool,
};
