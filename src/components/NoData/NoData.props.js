import { Box } from '@mui/material';

import PropTypes from 'prop-types';

export const NoDataPropTypes = {
  ...Box.propTypes,
  message: PropTypes.string.isRequired,
};
