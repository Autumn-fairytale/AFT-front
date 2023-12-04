import { Controller } from 'react-hook-form';

import PropTypes from 'prop-types';

import { AppTextInput } from '@/shared';

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
  ...other
}) => {
  let defaultError, defaultHelperText;

  if (errors && Object.keys(errors).length > 0 && !error) {
    defaultError = !!errors[name]?.message;
  }

  if (errors && Object.keys(errors).length > 0 && !helperText) {
    defaultHelperText = errors[name]?.message;
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <AppTextInput
          label={label}
          placeholder={placeholder}
          onChange={(e) => field.onChange(e)}
          value={field.value}
          margin={margin}
          className={className}
          error={defaultError || error}
          helperText={defaultHelperText || helperText}
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
};
