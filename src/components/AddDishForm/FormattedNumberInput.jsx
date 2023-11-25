import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

import { TextField } from '@mui/material';

import PropTypes from 'prop-types';

import { chefsAmountAfterFee } from '@/helpers';
import { HelperText } from './HelperText';

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

  const handleHelperText = calculatedAmount ? (
    <HelperText
      text={`You will receive: ${calculatedAmount} ₴`}
      isError={false}
    />
  ) : (
    <HelperText text={helperText} isError={!!error} />
  );

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ref, ...restFieldProps } }) => (
          <NumericFormat
            {...restFieldProps}
            value={value}
            size="normal"
            onValueChange={(values) => handleValueChange(values, onChange)}
            customInput={TextField}
            thousandSeparator={thousandSeparator}
            decimalScale={decimalScale}
            label={label}
            error={error}
            helperText={handleHelperText}
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
    </>
  );
};

FormattedNumberInput.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.node,
  sx: PropTypes.object,
  thousandSeparator: PropTypes.bool,
  decimalScale: PropTypes.number,
  endAdornment: PropTypes.node,
  onBlur: PropTypes.func,
};
