import { texareaProps } from './Texarea.props';
import { TextareaStyled } from './Textarea.styled';

/**
 * Textarea component for rendering a multiline input field.
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

export const Textarea = ({
  value,
  onChange,
  placeholder,
  minRows,
  maxRows,
  maxLength,
}) => {
  const isError = value.length > maxLength;

  return (
    <TextareaStyled
      minRows={minRows || 5}
      maxRows={maxRows || 5}
      value={value}
      onChange={onChange}
      placeholder={placeholder || ''}
      error={isError ? 'error' : null}
    />
  );
};

Textarea.propTypes = texareaProps;
