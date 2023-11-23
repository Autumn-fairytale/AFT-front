import { forwardRef } from 'react';

import { PropTypes } from 'prop-types';

import BaseInput from '../BaseInput/BaseInput';
import { baseInputPropTypes } from '../BaseInput/BaseInput.props';
import { PasswordVisibilityToggle } from '../utils/PasswordVisibilityToggle';
import { usePasswordShow } from '../utils/usePasswordShow';
import { StyledPasswordInput } from './AppInputs.styled';

const AppPasswordInput = forwardRef(({ wrapperStyle, ...props }, ref) => {
  const { ...toggleProps } = usePasswordShow();

  return (
    <StyledPasswordInput style={wrapperStyle}>
      <BaseInput
        type={toggleProps.showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: <PasswordVisibilityToggle {...toggleProps} />,
        }}
        ref={ref}
        {...props}
      />
    </StyledPasswordInput>
  );
});

AppPasswordInput.propTypes = {
  wrapperStyle: PropTypes.object,
  ...baseInputPropTypes,
};

AppPasswordInput.defaultProps = {
  label: 'Password',
  autoComplete: 'off',
};

AppPasswordInput.displayName = 'AppPasswordInput';

export default AppPasswordInput;
