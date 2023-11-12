import PropTypes from 'prop-types';

export const requiredInputPropTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const commonInputPropTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['text', 'password', 'search', 'tel']),
  fullWidth: PropTypes.bool,
  inputStyle: PropTypes.object,
  errorStatus: PropTypes.bool,
  underlineText: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
};

export const baseInputPropTypes = {
  ...requiredInputPropTypes,
  ...commonInputPropTypes,
};
