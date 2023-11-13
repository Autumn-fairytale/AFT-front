import { useTheme } from '@emotion/react';
import { baseInputPropTypes } from './BaseInput.props';
import { StyledBaseInput } from './BaseInput.styled';

/**
 * Most commonly used default input field props
 *
 * @component
 * @param {string} label - The label for the input field
 * @param {string} value - The current value of the input field saved in state
 * @param {function} onChange - The callback function to handle the changes of the current value
 * @param {boolean} fullWidth - Set the input {width: 100%}
 * @param {string} size - The height of the input field (small- 40px, medium - 46px, large - 56px)
 * @param {boolean} error - Whether the input field is in an error state (true or false)
 * @param {string} helperText - The helper text to display below the input field
 * @param {boolean} disabled - Whether the input field is disabled
 * @param {string} type - The type of the input field (text, password, search, tel)
 * @param {Object} other - Additional props to pass to the input field
 * @returns {JSX.Element}
 */
const BaseInput = ({
  label,
  value,
  onChange,
  fullWidth = true,
  size = 'medium',
  error,
  helperText,
  disabled,
  type,
  ...other
}) => {
  const theme = useTheme();

  return (
    <StyledBaseInput
      type={type}
      variant="outlined"
      theme={theme}
      size={size}
      label={label}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      error={error}
      helperText={helperText}
      disabled={disabled}
      {...other}
    />
  );
};

BaseInput.propTypes = baseInputPropTypes;

export default BaseInput;
