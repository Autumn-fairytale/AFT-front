import { Box } from '@mui/material';

import PropTypes from 'prop-types';

export const CartItemImagePropTypes = {
  ...Box.propTypes,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
