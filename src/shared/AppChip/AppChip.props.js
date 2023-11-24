import PropTypes from 'prop-types';

export const AppChipProps = {
  status: PropTypes.oneOf([
    'pending',
    'accepted',
    'cooking',
    'readyToDelivery',
    'delivering',
    'completed',
    'canceled',
  ]).isRequired,
};
