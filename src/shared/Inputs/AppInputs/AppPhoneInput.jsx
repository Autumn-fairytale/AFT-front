import { PatternFormat } from 'react-number-format';

import BaseInput from '../BaseInput/BaseInput';
import { baseInputPropTypes } from '../BaseInput/BaseInput.props';

const AppPhoneInput = (props) => {
  return (
    <PatternFormat
      customInput={BaseInput}
      format="+38 (0##) ### ## ##"
      mask="x"
      allowEmptyFormatting
      {...props}
    />
  );
};

AppPhoneInput.propTypes = baseInputPropTypes;

AppPhoneInput.defaultProps = {
  label: 'Phone Number',
  type: 'tel',
  InputLabelProps: { shrink: true },
};

export default AppPhoneInput;
