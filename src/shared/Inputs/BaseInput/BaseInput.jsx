import { useTheme } from '@emotion/react';
import { baseInputPropTypes } from './BaseInput.props';
import { StyledBaseInput } from './BaseInput.styled';

/**
 * BaseInput component for rendering an input field
 *
 * @component
 * @param {string} label - The label for the input field
 * @param {string} value - The current value of the input field saved in state
 * @param {function} onChange - The callback function to handle the changes of the current value
 * @param {Object} inputStyle - The object to add extra styles for the input field
 * @param {boolean} fullWidth - Set the input {width: 100%}
 * @param {string} size - The height of the input field (small- 40px, medium - 46px, large - 56px)
 * @param {boolean} errorStatus - Whether the input field is in an error state
 * @param {string} underlineText - The helper text to display below the input field
 * @param {boolean} disabled - Whether the input field is disabled
 * @param {string} id - The id for the input field
 * @param {string} type - The type of the input field (text, password, search)
 * @param {Object} other - Additional props to pass to the input field
 * @returns {JSX.Element}
 */
const BaseInput = ({
  label,
  value,
  onChange,
  inputStyle,
  fullWidth,
  size = 'medium',
  errorStatus,
  underlineText,
  disabled,
  id,
  type,
  ...other
}) => {
  const theme = useTheme();

  return (
    <StyledBaseInput
      id={id}
      type={type}
      variant="outlined"
      theme={theme}
      size={size}
      label={label}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      style={inputStyle}
      error={errorStatus}
      helperText={underlineText}
      disabled={disabled}
      {...other}
    />
  );
};

BaseInput.propTypes = baseInputPropTypes;

export default BaseInput;
