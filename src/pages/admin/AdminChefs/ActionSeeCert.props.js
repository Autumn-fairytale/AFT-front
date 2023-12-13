import PropTypes from 'prop-types';

export const ActionSeeProps = {
  params: PropTypes.shape({
    row: PropTypes.shape({
      certificate: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
