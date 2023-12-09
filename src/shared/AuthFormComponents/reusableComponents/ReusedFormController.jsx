import { Controller } from 'react-hook-form';

import PropTypes from 'prop-types';

import { AppPasswordInput, AppPhoneInput, AppTextInput } from '@/shared';

const componentMap = {
  text: AppTextInput,
  password: AppPasswordInput,
  tel: AppPhoneInput,
};

export const ReusedFormController = ({
  control,
  name,
  label,
  placeholder,
  margin,
  className,
  errors,
  error,
  helperText,
  autoComplete,
  type,
  ...other
}) => {
  let defaultError, defaultHelperText;

  if (errors && Object.keys(errors).length > 0 && !error) {
    defaultError = !!errors[name]?.message;
  }

  if (errors && Object.keys(errors).length > 0 && !helperText) {
    defaultHelperText = errors[name]?.message;
  }

  const Component = componentMap[type] || AppTextInput; // Select the component based on type

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Component
          label={label}
          placeholder={placeholder}
          onChange={(e) => field.onChange(e)}
          value={field.value}
          margin={margin}
          className={className}
          error={defaultError || error}
          helperText={defaultHelperText || helperText}
          autoComplete={autoComplete}
          {...field}
          {...other}
        />
      )}
      {...other}
    />
  );
};

ReusedFormController.defaultProps = {
  margin: 'normal',
  type: 'text',
};

ReusedFormController.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  margin: PropTypes.string,
  className: PropTypes.string,
  errors: PropTypes.object,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  autoComplete: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
};
