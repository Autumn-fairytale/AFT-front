import PropTypes from 'prop-types';

export const autocompletePropTypes = {
  inputLabel: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
};
