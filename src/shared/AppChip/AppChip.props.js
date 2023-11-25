import PropTypes from 'prop-types';

export const AppChipProps = {
  status: PropTypes.oneOf([
    'pending',
    'accepted',
    'cooking',
    'readyToDelivery',
    'ready',
    'delivering',
    'completed',
    'canceled',
  ]).isRequired,
};
