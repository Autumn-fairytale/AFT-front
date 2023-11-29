import PropTypes from 'prop-types';

export const ReviewFormProps = {
  existingReview: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    review: PropTypes.string.isRequired,
  }),
  dishId: PropTypes.string.isRequired,
};
