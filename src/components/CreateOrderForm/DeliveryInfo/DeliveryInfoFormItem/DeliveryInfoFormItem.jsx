import React from 'react';
import { Controller } from 'react-hook-form';

import { Box, Typography } from '@mui/material';

import { DeliveryInfoFormItemPropTypes } from './DeliveryInfoFormItem.styled';

const DeliveryInfoFormItem = ({ info, control, error }) => {
  const { name, component, sx, title, label, required } = info;

  return (
    <Box sx={sx}>
      {title && (
        <Typography component="h3" variant="subtitle1">
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

DeliveryInfoFormItem.propTypes = DeliveryInfoFormItemPropTypes;
DeliveryInfoFormItem.defaultProps = { info: { title: null, label: null } };

export default DeliveryInfoFormItem;
