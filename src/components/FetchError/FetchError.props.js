import { Box } from '@mui/material';

import PropTypes from 'prop-types';

export const FetchErrorPropTypes = {
  ...Box.propTypes,
  message: PropTypes.string,
};
