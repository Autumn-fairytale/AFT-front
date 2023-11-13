import PropTypes from 'prop-types';

export const AppModalProps = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.isRequired,
};
