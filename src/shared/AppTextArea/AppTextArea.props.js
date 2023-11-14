import PropTypes from 'prop-types';

export const texAreaProps = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
  maxLength: PropTypes.number,
  name: PropTypes.string,
};

export const defaultTexAreaProps = {
  placeholder: '',
  name: '',
  minRows: 5,
  maxRows: 5,
  maxLength: 400,
};
