import PropTypes from 'prop-types';

export const AppModalProps = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
};
