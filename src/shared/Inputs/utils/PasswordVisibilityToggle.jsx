import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import { IconButton, InputAdornment } from '@mui/material';

import PropTypes from 'prop-types';

/* "Eye" toggle button to display/hide password */
export const PasswordVisibilityToggle = ({
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
}) => (
  <InputAdornment position="end">
    <IconButton
      aria-label="toggle password visibility"
      onClick={handleClickShowPassword}
      onMouseDown={handleMouseDownPassword}
      edge="end"
    >
      {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
    </IconButton>
  </InputAdornment>
);

PasswordVisibilityToggle.propTypes = {
  showPassword: PropTypes.bool.isRequired,
  handleClickShowPassword: PropTypes.func.isRequired,
  handleMouseDownPassword: PropTypes.func.isRequired,
};
