import { AppTextInput } from '@/shared';

export const addressFormItems = [
  {
    name: 'country',
    component: (
      <AppTextInput
        label="Country"
        placeholder="Ukraine"
        autoComplete="country"
      />
    ),
    sx: {
      width: '100%',
      gridArea: 'country',
    },
  },
  {
    name: 'city',
    component: (
      <AppTextInput
        label="City"
        placeholder="Kyiv"
        autoComplete="street-address"
      />
    ),
    sx: {
      width: '100%',
      gridArea: 'city',
    },
  },
  {
    name: 'street',
    component: <AppTextInput label="Street" placeholder="Khreshchatyk" />,
    sx: {
      width: '100%',
      gridArea: 'street',
    },
  },
  {
    name: 'houseNumber',
    component: <AppTextInput label="House" placeholder="11/3" />,
    sx: {
      width: '100%',
      gridArea: 'houseNumber',
    },
  },
  {
    name: 'apartment',
    component: <AppTextInput label="Apart." placeholder="25" />,
    sx: {
      width: '100%',
      gridArea: 'apartment',
    },
  },
];
