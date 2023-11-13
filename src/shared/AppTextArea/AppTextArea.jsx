import { texAreaProps } from './AppTextArea.props';
import { TextAreaStyled } from './AppTextArea.styled';

/**
 * AppTextArea component for rendering a multiline input field.
 *
 * @component
 * @param {string} value - The current value of the textarea saved in state.
 * @param {function} onChange - The callback function to handle changes to the current value.
 * @param {string} placeholder - The placeholder text for the textarea.
 * @param {number} minRows - The minimum number of rows for the textarea.
 * @param {number} maxRows - The maximum number of rows for the textarea.
 * @param {number} maxLength - The maximum length of the text in the textarea.
 * @returns {JSX.Element}
 */

export const AppTextArea = ({
  value,
  onChange,
  placeholder,
  minRows,
  maxRows,
  maxLength,
}) => {
  const isError = value.length > maxLength;

  return (
    <TextAreaStyled
      minRows={minRows || 5}
      maxRows={maxRows || 5}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      error={isError ? 'error' : null}
    />
  );
};

AppTextArea.propTypes = texAreaProps;
