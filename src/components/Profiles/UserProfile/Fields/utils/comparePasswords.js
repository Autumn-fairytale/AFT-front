import PropTypes from 'prop-types';

export const comparePasswords = ({
  newPassword,
  currentPassword,
  setError,
}) => {
  const passwordErrors = {
    currentOne: 'Current password is required',
    newOne: 'New password is required',
    equal: 'New password must be different from the current one',
  };

  const { currentOne, newOne, equal } = passwordErrors;

  if (newPassword && !currentPassword) {
    setError('currentPassword', { type: 'custom', message: currentOne });
    return { status: true, message: currentOne };
  }

  if (!newPassword && currentPassword) {
    setError('newPassword', { type: 'custom', message: newOne });
    return { status: true, message: newOne };
  }

  if (newPassword && currentPassword && newPassword === currentPassword) {
    setError('newPassword', { type: 'custom', message: equal });
    return { status: true, message: equal };
  }

  return { status: false, message: '' };
};

const ComparePasswordsPropTypes = {
  newPassword: PropTypes.string.isRequired,
  currentPassword: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
};

comparePasswords.propTypes = ComparePasswordsPropTypes;
