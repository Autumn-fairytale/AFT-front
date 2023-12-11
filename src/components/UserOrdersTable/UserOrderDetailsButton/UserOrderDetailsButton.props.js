import { IconButton } from '@mui/material';

import PropTypes from 'prop-types';

export const UserOrderDetailsButtonPropTypes = {
  ...IconButton.propTypes,
  data: PropTypes.object.isRequired,
};
