import { Typography } from '@mui/material';

import PropTypes from 'prop-types';

export const AddDishFormFieldEndAdornment = ({ text }) => {
  return (
    <Typography color={(theme) => theme.palette.text.disabled}>
      {text}
    </Typography>
  );
};

AddDishFormFieldEndAdornment.propTypes = {
  text: PropTypes.string,
};
