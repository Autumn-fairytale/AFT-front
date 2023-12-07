import React from 'react';
import { Controller } from 'react-hook-form';

import { Box, Typography } from '@mui/material';

import { CourierInfoFieldPropTypes } from './CourierInfoField.props';

const CourierInfoField = ({ info, control, error }) => {
  const { name, component, sx, title, label, required } = info;

  return (
    <Box sx={sx}>
      {title && (
        <Typography
          component="h3"
          variant="subtitle1"
          sx={{ fontSize: '18px', marginBottom: '8px' }}
        >
          {title}
          {required && (
            <Box component="span" sx={{ color: 'red' }}>
              *
            </Box>
          )}
        </Typography>
      )}

      <Controller
        name={name}
        rules={{
          required: true,
        }}
        control={control}
        render={({ field }) =>
          React.cloneElement(component, {
            error: !!error,
            helperText: error?.message,
            label: label,
            placeholder: title,
            ...field,
          })
        }
      />
    </Box>
  );
};

CourierInfoField.propTypes = CourierInfoFieldPropTypes;
CourierInfoField.defaultProps = { info: { title: null, label: null } };

export default CourierInfoField;
