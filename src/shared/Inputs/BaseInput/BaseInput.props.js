import PropTypes from 'prop-types';

export const requiredInputPropTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const redefinedInputPropTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['text', 'password', 'search', 'tel']),
};

export const baseInputPropTypes = {
  ...requiredInputPropTypes,
  ...redefinedInputPropTypes,
};
