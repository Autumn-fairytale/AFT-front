import { Box } from '@mui/material';

import PropTypes from 'prop-types';

export const PaymentButtonPropTypes = {
  ...Box.propTypes,
  orderId: PropTypes.string.isRequired,
  isAutoSubmit: PropTypes.bool,
  paidComponent: PropTypes.node,
};
