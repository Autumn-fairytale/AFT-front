import { Box } from '@mui/material';

import PropTypes from 'prop-types';

export const UserOrderItemPropTypes = {
  ...Box.propTypes,
  dish: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
