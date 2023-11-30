import { Box } from '@mui/material';

import PropTypes from 'prop-types';

export const OrderSummaryPropTypes = {
  ...Box.propTypes,
  summary: PropTypes.shape({
    subtotal: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
    delivery: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }),
};
