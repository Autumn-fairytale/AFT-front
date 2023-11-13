import BaseInput from '../BaseInput/BaseInput';
import { baseInputPropTypes } from '../BaseInput/BaseInput.props';

const AppTextInput = (props) => {
  return <BaseInput type="text" {...props} />;
};

AppTextInput.propTypes = baseInputPropTypes;

export default AppTextInput;
