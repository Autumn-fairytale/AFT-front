import React from 'react';
import { Controller } from 'react-hook-form';

import { Box, Typography } from '@mui/material';

import { DeliveryInfoFormItemPropTypes } from './DeliveryInfoFormItem.styled';

const DeliveryInfoFormItem = ({ info, control, error }) => {
  const { name, component, sx, label } = info;

  return (
    <Box sx={sx}>
      <Typography component="h3" variant="subtitle1">
        {label}
      </Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          React.cloneElement(component, {
            error: !!error,
            helperText: error?.message,
            ...field,
          })
        }
      />
    </Box>
  );
};

DeliveryInfoFormItem.propTypes = DeliveryInfoFormItemPropTypes;

export default DeliveryInfoFormItem;
