import { Box } from '@mui/material';

import PropTypes from 'prop-types';

export const PaymentButtonPropTypes = {
  ...Box.propTypes,
  data: PropTypes.string.isRequired,
  signature: PropTypes.string.isRequired,
  isAutoSubmit: PropTypes.bool,
};
