import { forwardRef } from 'react';

import { defaultTexAreaProps, texAreaProps } from './AppTextArea.props';
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

// export const AppTextArea = ({
//   value,
//   onChange,
//   placeholder,
//   name,
//   minRows,
//   maxRows,
//   maxLength,
//   ...otherProps
// }) => {
//   const isError = value.length > maxLength;

//   return (
//     <TextAreaStyled
//       minRows={minRows}
//       maxRows={maxRows}
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       error={isError ? 'error' : null}
//       name={name}
//       {...otherProps}
//     />
//   );
// };

export const AppTextArea = forwardRef(
  (
    {
      value,
      onChange,
      placeholder,
      name,
      minRows,
      maxRows,
      maxLength,
      ...otherProps
    },
    ref
  ) => {
    const isError = value.length > maxLength;

    return (
      <TextAreaStyled
        minRows={minRows}
        maxRows={maxRows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={isError ? 'error' : null}
        name={name}
        ref={ref}
        {...otherProps}
      />
    );
  }
);

AppTextArea.propTypes = texAreaProps;

AppTextArea.defaultProps = defaultTexAreaProps;
AppTextArea.displayName = 'AppTextArea';
