import { AppTextInput } from '@/shared';

export const defaultAddressFormItems = [
  {
    title: 'Country',
    name: 'country',
    component: <AppTextInput label="" autoComplete="country" />,
    required: true,
    sx: {
      width: '100%',
      gridArea: 'country',
    },
  },
  {
    title: 'City',
    name: 'city',
    component: <AppTextInput label="" autoComplete="street-address" />,
    required: true,
    sx: {
      width: '100%',
      gridArea: 'city',
    },
  },
  {
    title: 'Street',
    name: 'street',
    component: <AppTextInput label="" />,
    required: true,
    sx: {
      width: '100%',
      gridArea: 'street',
    },
  },
  {
    title: 'House',
    name: 'houseNumber',
    component: <AppTextInput label="" />,
    required: true,
    sx: {
      width: '100%',
      gridArea: 'houseNumber',
    },
  },
  {
    title: 'Apartment',
    name: 'apartment',
    component: <AppTextInput label="" />,
    sx: {
      width: '100%',
      gridArea: 'apartment',
    },
  },
];
