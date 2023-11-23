import PropTypes from 'prop-types';

export const baseInputPropTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['text', 'password', 'search', 'tel']),
};
