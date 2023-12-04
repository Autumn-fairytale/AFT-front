import { Controller } from 'react-hook-form';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types';

import { AppSpiceLevel } from '@/shared/AppSpiceLevel/AppSpiceLevel';

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
          <AppSpiceLevel value={value} onChange={onChange} readOnly={false} />
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
