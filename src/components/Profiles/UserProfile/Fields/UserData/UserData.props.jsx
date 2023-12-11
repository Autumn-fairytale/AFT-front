import PropTypes from 'prop-types';

export const UserDataPropTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  initialImage: PropTypes.string.isRequired,
};
