import { useWatch } from 'react-hook-form';

import { Box } from '@mui/material';

import AddressForm from '@/components/AddressForm';
import {
  PasswordHints,
  useShowPasswordHints,
} from '@/components/SignUpForm/utils';
import { PasswordController } from '@/shared/AuthFormComponents/readyComponents';
import { useTheme } from '@emotion/react';
import UserAccountAvatar from '../../Avatar/UserAccountAvatar';
import {
  FieldGroupsStyled,
  GroupHeaderStyled,
  UserFieldsGroupStyled,
} from '../UserAccountFields.styled';
import { UserDataPropTypes } from './UserData.props';
import {
  addressFormItems,
  passwordFields,
  personalInfoFields,
} from './userFields';

const UserData = ({ control, errors, setValue, initialImage }) => {
  const theme = useTheme();

  const newPasswordValue = useWatch({
    control,
    name: 'newPassword',
    defaultValue: '',
  });
  console.log(errors);

  const showPasswordHints = useShowPasswordHints(errors, 'newPassword');

  return (
    <FieldGroupsStyled>
      {/* USER AVATAR */}
      <UserAccountAvatar
        control={control}
        setValue={setValue}
        initialImage={initialImage}
      />

      {/* USER PERSONAL INFO */}
      <UserFieldsGroupStyled theme={theme}>
        <GroupHeaderStyled theme={theme}>
          Personal Information
        </GroupHeaderStyled>

        {personalInfoFields.map(({ Controller, label, name }) => (
          <Controller
            key={name}
            control={control}
            errors={errors}
            name={name}
            label={label}
            InputLabelProps={{ shrink: true }}
            autoComplete="off"
          />
        ))}
      </UserFieldsGroupStyled>

      {/* CHANGE PASSWORD */}
      <UserFieldsGroupStyled theme={theme}>
        <GroupHeaderStyled theme={theme}>Change Password</GroupHeaderStyled>
        {passwordFields.map(({ label, name, placeholder }) => (
          <PasswordController
            key={name}
            control={control}
            errors={errors}
            name={name}
            label={label}
            placeholder={placeholder}
            InputLabelProps={{ shrink: true }}
            autoComplete="off"
          />
        ))}
        <PasswordHints
          passwordValue={newPasswordValue}
          showHints={showPasswordHints}
        />
      </UserFieldsGroupStyled>

      {/* ADDRESS INFO */}
      <UserFieldsGroupStyled theme={theme}>
        <GroupHeaderStyled theme={theme}>Address Information</GroupHeaderStyled>
        <Box sx={{ marginTop: '1.1rem' }}>
          <AddressForm
            control={control}
            errors={errors}
            addressFormItems={addressFormItems}
          />
        </Box>
      </UserFieldsGroupStyled>
    </FieldGroupsStyled>
  );
};

UserData.propTypes = UserDataPropTypes;

export default UserData;
