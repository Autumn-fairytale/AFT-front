import { Typography } from '@mui/material';

import PropTypes from 'prop-types';

export const OrderInfoSummaryItemPropTypes = {
  ...Typography.propTypes,
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};
