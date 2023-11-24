import { forwardRef } from 'react';

import BaseInput from '../BaseInput/BaseInput';
import { baseInputPropTypes } from '../BaseInput/BaseInput.props';

const AppTextInput = forwardRef((props, ref) => {
  return <BaseInput type="text" {...props} ref={ref} />;
});

AppTextInput.propTypes = baseInputPropTypes;

AppTextInput.displayName = 'AppTextInput';

export default AppTextInput;
