import { Typography } from '@mui/material';

import { AddDishFormFieldEndAdornmentProps } from './AddDishFormFieldEndAdornment.props';

export const AddDishFormFieldEndAdornment = ({ text }) => {
  return (
    <Typography color={(theme) => theme.palette.text.disabled}>
      {text}
    </Typography>
  );
};

AddDishFormFieldEndAdornment.propTypes = AddDishFormFieldEndAdornmentProps;
