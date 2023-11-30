import React from 'react';
import { Controller } from 'react-hook-form';

import { Box, Typography } from '@mui/material';

import AddressForm from '@/components/AddressForm/AddressForm';
import { AppPhoneInput, AppTextInput } from '@/shared';
import { AppTextArea } from '@/shared/AppTextArea/AppTextArea';
import { DeliveryInfoPropTypes } from './DeliveryInfo.props';
import {
  DeliveryInfoSectionStyled,
  DividerStyled,
} from './DeliveryInfo.styled';
import DeliveryInfoFormItem from './DeliveryInfoFormItem';

const fields = [
  {
    title: 'Phone number',
    name: 'phoneNumber',
    component: <AppPhoneInput autoComplete="tel" />,
    sx: { width: '250px' },
    required: true,
  },
  {
    title: 'Name',
    name: 'userName',
    component: <AppTextInput autoComplete="name" />,
    required: true,
  },
  {
    title: 'Email',
    name: 'email',
    component: <AppTextInput type="email" autoComplete="email" />,
    required: true,
  },
];

const DeliveryInfo = ({ control, errors }) => {
  return (
    <DeliveryInfoSectionStyled>
      <Typography component="h2" variant="h4">
        Delivery information
      </Typography>

      <Box sx={{ marginTop: '20px' }}>
        {fields.map((field) => (
          <React.Fragment key={field.name}>
            <DeliveryInfoFormItem
              info={field}
              control={control}
              error={errors[field.name]}
            />
            <DividerStyled />
          </React.Fragment>
        ))}

        <Box>
          <Typography component="h3" variant="h6">
            Address
          </Typography>

          <AddressForm control={control} errors={errors} />
        </Box>

        <DividerStyled />

        <Box>
          <Typography component="h3" variant="h6">
            Additional info
          </Typography>
          <Controller
            name="additionalInfo"
            control={control}
            render={({ field }) => (
              <AppTextArea label="" maxLength={400} {...field} />
            )}
          />
        </Box>
      </Box>
    </DeliveryInfoSectionStyled>
  );
};

DeliveryInfo.propTypes = DeliveryInfoPropTypes;

export default DeliveryInfo;
