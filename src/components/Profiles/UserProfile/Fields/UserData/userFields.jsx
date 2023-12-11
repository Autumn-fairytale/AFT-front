import { AppTextInput } from '@/shared';
import {
  EmailController,
  FirstNameController,
  LastNameController,
  PhoneController,
} from '@/shared/AuthFormComponents/readyComponents';

const createTextInput = (name, label, placeholder, autocomplete) => (
  <AppTextInput
    name={name}
    label={label}
    placeholder={placeholder}
    autoComplete={autocomplete || 'off'}
    InputLabelProps={{
      shrink: true,
    }}
  />
);

export const addressFormItems = [
  {
    name: 'country',
    component: createTextInput('country', 'Country', 'Ukraine', 'country'),
    sx: {
      width: '100%',
      gridArea: 'country',
    },
  },
  {
    name: 'city',
    component: createTextInput('city', 'City', 'Kyiv', 'street-address'),
    sx: {
      width: '100%',
      gridArea: 'city',
    },
  },
  {
    name: 'street',
    component: createTextInput('street', 'Street', 'Khreshchatyk'),
    sx: {
      width: '100%',
      gridArea: 'street',
    },
  },
  {
    name: 'houseNumber',
    component: createTextInput('houseNumber', 'House', '11/3'),
    sx: {
      width: '100%',
      gridArea: 'houseNumber',
    },
  },
  {
    name: 'apartment',
    component: createTextInput('apartment', 'Apart.', '25'),
    sx: {
      width: '100%',
      gridArea: 'apartment',
    },
  },
];

export const personalInfoFields = [
  {
    Controller: FirstNameController,
    label: 'First Name',
    name: 'firstName',
  },
  {
    Controller: LastNameController,
    label: 'Last Name',
    name: 'lastName',
  },
  {
    Controller: EmailController,
    label: 'Email',
    name: 'email',
  },
  {
    Controller: PhoneController,
    label: 'Phone Number',
    name: 'phoneNumber',
  },
];

export const passwordFields = [
  {
    label: 'Current Password',
    name: 'currentPassword',
    placeholder: 'Enter your current password',
    autoComplete: 'current-password',
  },
  {
    label: 'New Password',
    name: 'newPassword',
    placeholder: 'Enter a new password',
    autoComplete: 'new-password',
  },
];
