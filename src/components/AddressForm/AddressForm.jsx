import { Box } from '@mui/material';

import { AppTextInput } from '@/shared';
import DeliveryInfoFormItem from '../CreateOrderForm/DeliveryInfo/DeliveryInfoFormItem';
import { AddressFormPropTypes } from './AddressForm.props';

const AddressForm = ({ control, errors, ...props }) => {
  return (
    <Box
      sx={{
        width: '100%',

        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '10px 10px',
        gridAutoFlow: 'row',
        gridTemplateAreas:
          '"country country city city" "street street house apartment"',
      }}
      {...props}
    >
      <DeliveryInfoFormItem
        info={{
          title: 'Country',
          name: 'address.country',
          component: <AppTextInput label="" autoComplete="country" />,
          required: true,
          sx: { width: '100%', gridArea: 'country' },
        }}
        control={control}
        error={errors['address']?.country}
      />

      <DeliveryInfoFormItem
        info={{
          title: 'City',
          name: 'address.city',
          component: <AppTextInput label="" autoComplete="street-address" />,
          required: true,
          sx: { width: '100%', gridArea: 'city' },
        }}
        control={control}
        error={errors['address']?.city}
      />

      <DeliveryInfoFormItem
        info={{
          title: 'Street',
          name: 'address.street',
          component: <AppTextInput label="" />,
          required: true,
          sx: { width: '100%', gridArea: 'street' },
        }}
        control={control}
        error={errors['address']?.street}
      />

      <DeliveryInfoFormItem
        info={{
          title: 'House',
          name: 'address.houseNumber',
          component: <AppTextInput label="" />,
          required: true,
          sx: { width: '100%', gridArea: 'house' },
        }}
        control={control}
        error={errors['address']?.houseNumber}
      />

      <DeliveryInfoFormItem
        info={{
          title: 'Apartment',
          name: 'address.apartment',
          component: <AppTextInput label="" />,
          sx: { width: '100%', gridArea: 'apartment' },
        }}
        control={control}
        error={errors['address']?.apartment}
      />
    </Box>
  );
};

AddressForm.propTypes = AddressFormPropTypes;

export default AddressForm;
