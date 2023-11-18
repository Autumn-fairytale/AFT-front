import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

import { TextField } from '@mui/material';

import PropTypes from 'prop-types';

export const FormattedNumberInput = ({
  control,
  name,
  label,
  error,
  helperText,
  sx,
  thousandSeparator = false,
  decimalScale = 2,
  endAdornment,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref, ...restFieldProps } }) => (
        <NumericFormat
          {...restFieldProps}
          value={value}
          size="normal"
          onValueChange={(values) => {
            onChange(values.value ? Number(values.value) : '');
          }}
          customInput={TextField}
          thousandSeparator={thousandSeparator}
          decimalScale={decimalScale}
          label={label}
          error={error}
          helperText={helperText}
          inputRef={ref}
          sx={sx}
          autoComplete="off"
          InputProps={{
            endAdornment: isFocused ? endAdornment : null,
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
          }}
        />
      )}
    />
  );
};

FormattedNumberInput.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  sx: PropTypes.object,
  thousandSeparator: PropTypes.bool,
  decimalScale: PropTypes.number,
  endAdornment: PropTypes.node,
};