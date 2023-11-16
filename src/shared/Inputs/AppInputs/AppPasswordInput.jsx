import { PropTypes } from 'prop-types';

import BaseInput from '../BaseInput/BaseInput';
import { baseInputPropTypes } from '../BaseInput/BaseInput.props';
import { PasswordVisibilityToggle } from '../utils/PasswordVisibilityToggle';
import { usePasswordShow } from '../utils/usePasswordShow';
import { StyledPasswordInput } from './AppInputs.styled';

const AppPasswordInput = ({ wrapperStyle, ...props }) => {
  const { ...toggleProps } = usePasswordShow();

  return (
    <StyledPasswordInput style={wrapperStyle}>
      <BaseInput
        type={toggleProps.showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: <PasswordVisibilityToggle {...toggleProps} />,
        }}
        {...props}
      />
    </StyledPasswordInput>
  );
};

AppPasswordInput.propTypes = {
  wrapperStyle: PropTypes.object,
  ...baseInputPropTypes,
};

AppPasswordInput.defaultProps = {
  label: 'Password',
};

export default AppPasswordInput;
