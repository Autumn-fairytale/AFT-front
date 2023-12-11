import PropTypes from 'prop-types';

export const FormattedNumberInputProps = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.any,
  sx: PropTypes.object,
  thousandSeparator: PropTypes.bool,
  decimalScale: PropTypes.number,
  endAdornment: PropTypes.node,
  onBlur: PropTypes.func,
};
