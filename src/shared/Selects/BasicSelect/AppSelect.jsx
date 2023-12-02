import { forwardRef } from 'react';

import { FormHelperText, InputLabel, Select } from '@mui/material';

import { useTheme } from '@emotion/react';
import { basicSelectPropTypes } from './AppSelect.props';
import { StyledFormControl } from './AppSelect.styles';
import { renderOptions, renderPlaceholder } from './utils/selectHelpers';

/**
 * AppSelect Component
 *
 * This component provides a basic select input for choosing a single option from a list.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the select input.
 * @param {string} props.value - The currently selected value.
 * @param {function} props.onChange - The callback function triggered when the selected value changes.
 * @param {(string[]|Object[])} props.options - The array of options for the select input. Each option can be a string or an object with 'label' and 'value' properties.
 * @param {boolean} [props.error] - Indicates whether the select input has an error.
 * @param {string} props.helperText - The helper text to display below the select input.
 * @param {string} [props.placeholder] - The placeholder for the select input.
 * @returns {React.Component} The rendered AppSelect component.
 */

const AppSelect = forwardRef(
  (
    {
      label,
      value,
      onChange,
      options,
      error,
      helperText,
      placeholder,
      wrapperStyle,
      ...other
    },
    ref
  ) => {
    const theme = useTheme();

    return (
      <StyledFormControl
        fullWidth
        error={error}
        placeholder={placeholder}
        value={value}
        style={wrapperStyle}
      >
        <InputLabel
          id="basic-select-label"
          shrink={!!value || (placeholder && value === '')}
        >
          {label}
        </InputLabel>
        <Select
          labelId="basic-select-label"
          id="app-basic-select"
          displayEmpty
          value={value}
          label={label}
          MenuProps={{
            autoFocus: false,
          }}
          onChange={onChange}
          ref={ref}
          {...other}
        >
          {placeholder && renderPlaceholder(placeholder)}
          {renderOptions(options, theme)}
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </StyledFormControl>
    );
  }
);

AppSelect.propTypes = basicSelectPropTypes;
AppSelect.displayName = 'AppSelected';
AppSelect.defaultProps = {
  error: false,
};

export default AppSelect;
