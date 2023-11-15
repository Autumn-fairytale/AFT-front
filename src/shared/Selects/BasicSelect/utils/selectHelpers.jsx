import { MenuItem } from '@mui/material';

import { StyledMenuItem } from '../AppSelect.styles';

export const renderPlaceholder = (placeholder) => {
  return (
    <MenuItem value="" disabled style={{ backgroundColor: 'transparent' }}>
      {placeholder}
    </MenuItem>
  );
};

/**
 * Gets the label and value from the given option.
 *
 * @param {(string|Object)} option - The option to extract label and value from.
 * @returns {Object} An object containing 'label' and 'value'.
 */
const getOptionData = (option) => {
  if (typeof option === 'object') {
    const { label, value } = option;
    return { label, value };
  } else {
    return { label: option, value: option };
  }
};

export const renderOptions = (options, theme) => {
  return options.map((option) => {
    const { label, value } = getOptionData(option);
    return (
      <StyledMenuItem theme={theme} key={value} value={value}>
        {label}
      </StyledMenuItem>
    );
  });
};
