import PropTypes from 'prop-types';

export const AppChipProps = {
  status: PropTypes.oneOf([
    'pending',
    'accepted',
    'cooking',
    'readyToDelivery',
    '→ delivery',
    'READY_TO_DELIVERY',
    'delivering',
    'completed',
    'canceled',
  ]).isRequired,
};
