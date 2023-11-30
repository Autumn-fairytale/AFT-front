import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

import { TextField } from '@mui/material';

import PropTypes from 'prop-types';

import { chefsAmountAfterFee } from '@/helpers';

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
  const [calculatedAmount, setCalculatedAmount] = useState('');

  const handleValueChange = (values, onChange) => {
    if (name === 'price') {
      const rawValue = values.value;

      const valueWithoutCommas = rawValue.replace(/,/g, '');

      const value = parseFloat(valueWithoutCommas);

      if (!isNaN(value)) {
        setCalculatedAmount(chefsAmountAfterFee(value));
      } else {
        setCalculatedAmount('');
      }
    }

    onChange(values.value ? Number(values.value) : '');
  };

  const handleText = () => {
    if (error) {
      return { text: helperText, isError: true };
    }
    if (!error && calculatedAmount > 0) {
      return {
        text: `You will receive: ${calculatedAmount} ₴`,
        isError: false,
      };
    }
    return { text: ' ', isError: false };
  };

  const helperTextStyle = (isError) => ({
    '& .MuiFormHelperText-root': {
      color: isError ? 'red' : 'green',
      fontSize: '1rem',
    },
  });

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ref, ...restFieldProps } }) => {
          const { text, isError } = handleText();

          return (
            <NumericFormat
              {...restFieldProps}
              value={value}
              customInput={TextField}
              error={error}
              helperText={text}
              inputRef={ref}
              sx={{ ...sx, ...helperTextStyle(isError) }}
              thousandSeparator={thousandSeparator}
              decimalScale={decimalScale}
              label={label}
              autoComplete="off"
              InputProps={{
                endAdornment: isFocused ? endAdornment : null,
                onFocus: () => setIsFocused(true),
                onBlur: () => setIsFocused(false),
              }}
              size="normal"
              onValueChange={(values) => handleValueChange(values, onChange)}
            />
          );
        }}
      />
    </>
  );
};

FormattedNumberInput.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.any,
  sx: PropTypes.object,
  thousandSeparator: PropTypes.bool,
  decimalScale: PropTypes.number,
  endAdornment: PropTypes.node,
  onBlur: PropTypes.func,
};
