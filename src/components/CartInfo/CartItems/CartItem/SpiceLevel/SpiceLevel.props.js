import { Box } from '@mui/material';

import PropTypes from 'prop-types';

export const SpiceLevelPropTypes = {
  value: PropTypes.number.isRequired,
  ...Box.propTypes,
};
