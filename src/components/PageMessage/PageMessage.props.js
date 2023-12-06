import { Box } from '@mui/material';

import PropTypes from 'prop-types';

export const PageMessagePropTypes = {
  ...Box.propTypes,
  image: PropTypes.string,
  variant: PropTypes.oneOf(['error', 'no-data', 'payment']),
  message: PropTypes.string,
};
