import { useAutocomplete } from '@mui/base/useAutocomplete';
import CheckIcon from '@mui/icons-material/Check';
import { FormHelperText } from '@mui/material';

import { autocompletePropTypes } from './AppAutocomplete.props';
import {
  AutocompleteWrapper,
  InputWrapper,
  Label,
  Listbox,
} from './AppAutocomplete.styled';
import { StyledTag } from './utils/AutocompleteTag.styled';

/**
 * AppAutocomplete Component
 *
 * This component provides an autocomplete input for selecting multiple options from a list.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.label - The text label for the autocomplete input.
 * @param {string[]} props.options - The array of options for the autocomplete.
 * @param {function} props.onChange - The callback function triggered when the selected options change and add it to the state array.
 * @param {boolean} [props.error] - Indicates whether there is an error in the input.
 * @param {string} props.helperText - Additional text to be displayed underneath the input.
 * @param {string} [props.placeholder] - The placeholder for the autocomplete.
 * @param {string} [props.id] - The id of the autocomplete input.
 * @param {Object} [props.style] - The inline style object to apply to the autocomplete wrapper.
 * @returns {React.Component} The rendered AppAutocomplete component.
 */

const AppAutocomplete = ({
  label,
  options,
  onChange,
  error,
  helperText,
  placeholder,
  id,
  style,
}) => {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    dirty,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id,
    defaultValue: [],
    multiple: true,
    options,
    getOptionLabel: (option) => option,
    onChange: (_, newValue) => onChange(newValue),
    disableCloseOnSelect: true,
  });

  const renderOptions = () => (
    <Listbox {...getListboxProps()}>
      {groupedOptions.map((option, index) => (
        <li {...getOptionProps({ option, index })} key={option}>
          <span>{option}</span>
          <CheckIcon fontSize="small" />
        </li>
      ))}
    </Listbox>
  );

  const renderInputField = () => (
    <InputWrapper
      ref={setAnchorEl}
      className={focused ? 'focused' : ''}
      error={error}
    >
      {value.map((option, index) => (
        <StyledTag label={option} key={option} {...getTagProps({ index })} />
      ))}
      <input {...getInputProps()} placeholder={dirty ? '' : placeholder} />
    </InputWrapper>
  );

  return (
    <AutocompleteWrapper style={style}>
      <div {...getRootProps()}>
        {/* Label of input */}
        {label && <Label {...getInputLabelProps()}>{label}</Label>}

        {/* Input field */}
        {renderInputField()}

        {/* Underline warning */}
        {helperText && (
          <FormHelperText error={error}>{helperText}</FormHelperText>
        )}
      </div>

      {/* Options menu */}
      {groupedOptions.length > 0 && renderOptions()}
    </AutocompleteWrapper>
  );
};

AppAutocomplete.propTypes = autocompletePropTypes;

AppAutocomplete.defaultProps = {
  id: 'ingredients-autocomplete',
  error: false,
  placeholder: 'Select ingredients',
};

export default AppAutocomplete;
