import { PatternFormat } from 'react-number-format';

import PropTypes from 'prop-types';

import BaseInput from '../BaseInput/BaseInput';
import { commonInputPropTypes } from '../BaseInput/BaseInput.props';

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

AppPhoneInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  ...commonInputPropTypes,
};

AppPhoneInput.defaultProps = {
  label: 'Phone Number',
  type: 'tel',
  InputLabelProps: { shrink: true },
};

export default AppPhoneInput;
