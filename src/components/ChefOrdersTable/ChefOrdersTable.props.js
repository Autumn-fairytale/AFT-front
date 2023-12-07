import PropTypes from 'prop-types';

export const ChefOrdersTablePropTypes = {
  status: PropTypes.string,
  getOrders: PropTypes.func.isRequired,
  tableHight: PropTypes.string.isRequired,
};
