import PropTypes from 'prop-types';

import { TextareaStyled } from './Textarea.styled';

export const Textarea = ({
  value,
  onChange,
  placeholder,
  minRows,
  maxRows,
}) => {
  return (
    <TextareaStyled
      minRows={minRows || 5}
      maxRows={maxRows || 5}
      value={value}
      onChange={onChange}
      placeholder={placeholder || ''}
    />
  );
};

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
};
