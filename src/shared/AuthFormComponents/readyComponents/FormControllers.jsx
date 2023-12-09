import PropTypes from 'prop-types';

import { ReusedFormController } from '../reusableComponents';

export const formControllerPropTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object,
  className: PropTypes.string,
};

export const FirstNameController = ({
  control,
  errors,
  className,
  ...other
}) => {
  return (
    <ReusedFormController
      control={control}
      name="firstName"
      label="First Name"
      placeholder={'Enter your first name' || other.placeholder}
      className={className}
      errors={errors}
      autoComplete="given-name"
      {...other}
    />
  );
};

FirstNameController.propTypes = {
  ...formControllerPropTypes,
};

export const LastNameController = ({
  control,
  errors,
  className,
  ...other
}) => {
  return (
    <ReusedFormController
      control={control}
      name="lastName"
      label="Last Name"
      placeholder={'Enter your last name' || other.placeholder}
      className={className}
      errors={errors}
      autoComplete="family-name"
      {...other}
    />
  );
};

LastNameController.propTypes = {
  ...formControllerPropTypes,
};

export const EmailController = ({ control, errors, className, ...other }) => {
  return (
    <ReusedFormController
      control={control}
      name="email"
      label="Email"
      placeholder={'e.g., email@example.com' || other.placeholder}
      className={className}
      errors={errors}
      autoComplete="email"
      {...other}
    />
  );
};

EmailController.propTypes = {
  ...formControllerPropTypes,
};

export const PasswordController = ({
  control,
  errors,
  className,
  ...other
}) => {
  return (
    <ReusedFormController
      control={control}
      name="password"
      label="Password"
      type="password"
      placeholder={'e.g., Qwerty1!' || other.placeholder}
      className={className}
      errors={errors}
      {...other}
    />
  );
};

PasswordController.propTypes = {
  ...formControllerPropTypes,
};

export const PhoneController = ({ control, errors, className, ...other }) => {
  return (
    <ReusedFormController
      control={control}
      name="phoneNumber"
      label="Phone Number"
      type="tel"
      className={className}
      errors={errors}
      {...other}
    />
  );
};

PhoneController.propTypes = {
  ...formControllerPropTypes,
};
