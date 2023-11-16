import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { MdClear } from 'react-icons/md';

import { IconButton, InputAdornment } from '@mui/material';

import { PropTypes } from 'prop-types';

import BaseInput from '../BaseInput/BaseInput';
import { baseInputPropTypes } from '../BaseInput/BaseInput.props';
import { StyledSearchInput } from './AppInputs.styled';

const AppSearchInput = ({ wrapperStyle, ...props }) => {
  const inputRef = useRef(null);

  const handleClearClick = () => {
    if (props.onChange) {
      props.onChange({ target: { value: '' } });
    } else {
      if (inputRef.current) {
        inputRef.current.value = '';
        inputRef.current.focus();
      }
    }
  };

  const searchIcons = {
    startAdornment: (
      <InputAdornment position="start">
        <BsSearch />
      </InputAdornment>
    ),
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleClearClick}>
          <MdClear />
        </IconButton>
      </InputAdornment>
    ),
  };

  return (
    <StyledSearchInput value={props.value} style={wrapperStyle} ref={inputRef}>
      <BaseInput InputProps={searchIcons} {...props} />
    </StyledSearchInput>
  );
};

AppSearchInput.propTypes = {
  wrapperStyle: PropTypes.object,
  ...baseInputPropTypes,
};

AppSearchInput.defaultProps = {
  label: 'Search',
  placeholder: 'Find your favorite dish or chef',
  type: 'text',
};

export default AppSearchInput;
