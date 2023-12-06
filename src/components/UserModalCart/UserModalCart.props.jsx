import PropTypes from 'prop-types';

export const UserModalCartPropTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
