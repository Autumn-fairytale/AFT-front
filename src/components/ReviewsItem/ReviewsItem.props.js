import PropTypes from 'prop-types';

export const ReviewsItemProps = {
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    }).isRequired,
    dish: PropTypes.shape({
      id: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    }),
    rating: PropTypes.number.isRequired,
    review: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,

  // dishId: PropTypes.string.isRequired,
};
