import { forwardRef } from 'react';
import { PatternFormat } from 'react-number-format';

import { PropTypes } from 'prop-types';

import { useTheme } from '@emotion/react';
import BaseInput from '../BaseInput/BaseInput';
import { baseInputPropTypes } from '../BaseInput/BaseInput.props';
import { StyledPhoneInput } from './AppInputs.styled';

const AppPhoneInput = forwardRef(({ wrapperStyle, label, ...props }, ref) => {
  const theme = useTheme();

  return (
    <StyledPhoneInput style={wrapperStyle} theme={theme}>
      <PatternFormat
        customInput={BaseInput}
        format="+38(0##) ### ## ##"
        mask="x"
        style={props.error ? { color: theme.palette.error.main } : {}}
        allowEmptyFormatting
        inputRef={ref}
        label={label}
        {...props}
      />
    </StyledPhoneInput>
  );
});

AppPhoneInput.propTypes = {
  wrapperStyle: PropTypes.object,
  ...baseInputPropTypes,
};

AppPhoneInput.defaultProps = {
  type: 'tel',
  InputLabelProps: { shrink: true },
};

AppPhoneInput.displayName = 'AppPhoneInput';

export default AppPhoneInput;
