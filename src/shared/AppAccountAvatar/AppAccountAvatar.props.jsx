import PropTypes from 'prop-types';

export const AppAccountAvatarPropTypes = {
  control: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isAvatar: PropTypes.bool,
  initialImage: PropTypes.string,
  folder: PropTypes.string,
};
