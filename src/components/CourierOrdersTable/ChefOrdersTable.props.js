import PropTypes from 'prop-types';

export const CourierOrdersTablePropTypes = {
  status: PropTypes.string,
  getOrders: PropTypes.func.isRequired,
  tableHight: PropTypes.string.isRequired,
};
