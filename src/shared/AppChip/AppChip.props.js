import PropTypes from 'prop-types';

export const AppChipProps = {
  status: PropTypes.oneOf([
    'pending',
    'accepted',
    'cooking',
    'readyToDelivery',
    '→ delivery',
    'delivering',
    'completed',
    'canceled',
  ]).isRequired,
};
