import CircularProgress from '@mui/material/CircularProgress';

import PropTypes from 'prop-types';

import { ReusedSubmitButton } from '../reusableComponents';
import { signInButtonStyles, singUpButtonStyles } from '../styles';

// LOADER INSIDE BUTTON
export const LabelOrLoader = ({ isLoading, labelText }) => {
  let styles = { color: 'white', padding: '0.3em' };
  return isLoading ? <CircularProgress sx={{ ...styles }} /> : labelText;
};
LabelOrLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  labelText: PropTypes.string,
};
LabelOrLoader.defaultProps = {
  labelText: 'Submit',
};

export const submitButtonPropTypes = {
  isLoading: PropTypes.bool.isRequired,
  labelText: PropTypes.string,
};

// SIGN IN BUTTON
export const SignInSubmitButton = ({ isLoading, labelText, ...other }) => (
  <ReusedSubmitButton
    label={<LabelOrLoader isLoading={isLoading} labelText={labelText} />}
    styles={{ ...signInButtonStyles }}
    {...other}
  />
);
SignInSubmitButton.propTypes = {
  ...submitButtonPropTypes,
};
SignInSubmitButton.defaultProps = {
  labelText: 'Submit',
};

// SIGN UP BUTTON
export const SignUpSubmitButton = ({ isLoading, labelText, ...other }) => (
  <ReusedSubmitButton
    label={<LabelOrLoader isLoading={isLoading} labelText={labelText} />}
    styles={{ ...singUpButtonStyles }}
    {...other}
  />
);
SignUpSubmitButton.propTypes = {
  ...submitButtonPropTypes,
};
SignUpSubmitButton.defaultProps = {
  labelText: 'Create Account',
};
