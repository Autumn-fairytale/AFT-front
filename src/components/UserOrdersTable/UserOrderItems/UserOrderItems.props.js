import { Box } from '@mui/material';

import PropTypes from 'prop-types';

import { UserOrderItemPropTypes } from './UserOrderItem/UserOrderItem.props';

export const UserOrderItemsPropTypes = {
  ...Box.propTypes,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number.isRequired,
      dish: UserOrderItemPropTypes.dish,
    }).isRequired
  ).isRequired,
};
