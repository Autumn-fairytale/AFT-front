import PropTypes from 'prop-types';

export const ReviewsItemProps = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  dish: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
};
