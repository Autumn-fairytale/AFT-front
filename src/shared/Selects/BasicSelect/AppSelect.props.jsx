import PropTypes from 'prop-types';

const valueTypes = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const optionShape = PropTypes.exact({
  value: valueTypes.isRequired,
  label: PropTypes.node.isRequired,
});

const optionTypes = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.arrayOf(PropTypes.number),
  PropTypes.arrayOf(optionShape),
]);

export const basicSelectPropTypes = {
  label: PropTypes.string,
  value: valueTypes.isRequired,
  onChange: PropTypes.func.isRequired,
  options: optionTypes.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
};
