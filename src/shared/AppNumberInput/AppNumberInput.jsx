import { FaMinus, FaPlus } from 'react-icons/fa';

import { IconButton, TextField } from '@mui/material';

import {
  AppNumberInputStyled,
  AppTextInputStyled,
} from './AppNumberInput.styled';

const AppNumberInput = ({ value, onChange, sx, ...props }) => {
  const incrementHandler = () => {
    onChange(value >= 100 ? 100 : value + 1);
  };

  const decrementHandler = () => {
    onChange(value <= 0 ? 0 : value - 1);
  };

  return (
    <AppNumberInputStyled sx={sx}>
      <IconButton
        onClick={decrementHandler}
        aria-label="decrement count"
        size="small"
        color="primary"
      >
        <FaMinus />
      </IconButton>
      <AppTextInputStyled value={value} {...props} />

      <IconButton
        onClick={incrementHandler}
        aria-label="increment count"
        size="small"
        color="primary"
      >
        <FaPlus />
      </IconButton>
    </AppNumberInputStyled>
  );
};

AppNumberInput.propTypes = TextField.propTypes;

export default AppNumberInput;
