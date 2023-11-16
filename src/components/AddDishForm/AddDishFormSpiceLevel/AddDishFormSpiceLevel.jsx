import { Controller } from 'react-hook-form';

import PepperIcon from '@mui/icons-material/Whatshot';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types';

import { StyledRating } from './AddDishFormSpiceLevelStyled';

export const AddDishFormSpiceLevel = ({ control, name, error }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 'auto',
      }}
    >
      <Typography component="legend">Adjust spice level</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <StyledRating
            name="customized-color"
            value={value}
            onChange={(_e, newValue) => {
              onChange(Number(newValue));
            }}
            getLabelText={(value) => `Spice level: ${value}`}
            precision={1}
            max={3}
            icon={<PepperIcon fontSize="inherit" />}
            emptyIcon={<PepperIcon fontSize="inherit" />}
          />
        )}
      />
      {error && <Typography color="error">{error.message}</Typography>}
    </Box>
  );
};

AddDishFormSpiceLevel.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.object,
};
