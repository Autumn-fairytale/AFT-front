import { Controller } from 'react-hook-form';

import { Box, Typography } from '@mui/material';

import AddressForm from '@/components/AddressForm/AddressForm';
import { AppPhoneInput, AppTextInput } from '@/shared';
import { AppTextArea } from '@/shared/AppTextArea/AppTextArea';
import { DeliveryInfoPropTypes } from './DeliveryInfo.props';
import {
  DeliveryGroupTitle,
  DeliveryInfoSectionStyled,
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
        <DeliveryGroupTitle>User info:</DeliveryGroupTitle>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            py: '20px',
          }}
        >
          {fields.map((field) => (
            <DeliveryInfoFormItem
              key={field.name}
              info={field}
              control={control}
              error={errors[field.name]}
            />
          ))}
        </Box>

        <DeliveryGroupTitle>Address:</DeliveryGroupTitle>

        <AddressForm
          control={control}
          errors={errors}
          sx={{ paddingTop: '20px', paddingBottom: '20px' }}
        />

        <DeliveryGroupTitle sx={{ marginBottom: '20px' }}>
          Additional info:
        </DeliveryGroupTitle>
        <Controller
          name="additionalInfo"
          control={control}
          render={({ field }) => (
            <AppTextArea label="" maxLength={400} {...field} />
          )}
        />
      </Box>
    </DeliveryInfoSectionStyled>
  );
};

DeliveryInfo.propTypes = DeliveryInfoPropTypes;
DeliveryInfo.displayName = 'DeliveryInfo';

export default DeliveryInfo;
