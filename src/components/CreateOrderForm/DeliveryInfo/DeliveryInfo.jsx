import React from 'react';
import { Controller } from 'react-hook-form';

import { Box, Typography } from '@mui/material';

import { AppPhoneInput, AppTextInput } from '@/shared';
import AutocompletePlaces from '@/shared/AppMap/AutocompletePlaces/AutocompletePlaces';
import { AppTextArea } from '@/shared/AppTextArea/AppTextArea';
import { DeliveryInfoPropTypes } from './DeliveryInfo.props';
import {
  DeliveryInfoSectionStyled,
  DividerStyled,
} from './DeliveryInfo.styled';
import DeliveryInfoFormItem from './DeliveryInfoFormItem';

const fields = [
  {
    label: 'Phone number',
    name: 'phoneNumber',
    component: <AppPhoneInput label="" autoComplete="tel" />,
    sx: { width: '250px' },
  },
  {
    label: 'Name',
    name: 'userName',
    component: <AppTextInput label="" autoComplete="name" />,
  },
  {
    label: 'Email',
    name: 'email',
    component: <AppTextInput label="" type="email" autoComplete="email" />,
  },
];

const DeliveryInfo = ({ control, errors }) => {
  return (
    <DeliveryInfoSectionStyled>
      <Typography component="h2" variant="h4">
        Delivery information
      </Typography>
      <AutocompletePlaces
        onSelect={(evt) => {
          console.log(evt);
        }}
        autocompletePlacesProps={{ width: '300px' }}
      />

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
          <Typography component="h4" variant="subtitle1">
            Country
          </Typography>
          <Controller
            name="address.country"
            control={control}
            render={({ field }) => (
              <AppTextInput
                label=""
                autoComplete="country"
                error={!!errors['address']?.country}
                helperText={errors['address']?.country?.message}
                {...field}
              />
            )}
          />

          <Typography component="h4" variant="subtitle1">
            City
          </Typography>
          <Controller
            name="address.city"
            control={control}
            render={({ field }) => (
              <AppTextInput
                label=""
                autoComplete="street-address"
                error={!!errors['address']?.city}
                helperText={errors['address']?.city?.message}
                {...field}
              />
            )}
          />
          <Typography component="h4" variant="subtitle1">
            Street
          </Typography>
          <Controller
            name="address.street"
            control={control}
            render={({ field }) => (
              <AppTextInput
                label=""
                autoComplete="street-address"
                error={!!errors['address']?.street}
                helperText={errors['address']?.street?.message}
                {...field}
              />
            )}
          />
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
