import PropTypes from 'prop-types';

export const AppChipProps = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRowClick: PropTypes.func,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
  pageSize: PropTypes.number,
  loading: PropTypes.bool,
  tableHeight: PropTypes.string,
  disableColumnMenu: PropTypes.bool,
  slotProps: PropTypes.object,
  otherProps: PropTypes.object,
};
