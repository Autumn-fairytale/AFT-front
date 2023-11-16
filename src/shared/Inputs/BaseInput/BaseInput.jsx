import { forwardRef } from 'react';

import { useTheme } from '@emotion/react';
import { baseInputPropTypes } from './BaseInput.props';
import { StyledBaseInput } from './BaseInput.styled';

/**
 * BaseInput component serves as the foundation for other input-type components
 *
 * @component
 * @param {string} size - The height of the input field (small- 40px, medium - 46px, large - 56px)
 * @param {string} type - The type of the input field (text, password, search, tel)
 * @returns {JSX.Element}
 */
const BaseInput = forwardRef(({ size, type, ...other }, ref) => {
  const theme = useTheme();

  return (
    <StyledBaseInput
      theme={theme}
      size={size}
      type={type}
      inputRef={ref}
      {...other}
    />
  );
});

BaseInput.propTypes = baseInputPropTypes;

BaseInput.defaultProps = {
  fullWidth: true,
  variant: 'outlined',
};

BaseInput.displayName = 'BaseInput';

export default BaseInput;
