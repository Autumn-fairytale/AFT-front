import { Box } from '@mui/material';

import AddressForm from '@/components/AddressForm';
import {
  EmailController,
  FirstNameController,
  LastNameController,
  PasswordController,
  PhoneController,
} from '@/shared/AuthFormComponents/readyComponents';
import { useTheme } from '@emotion/react';
import {
  FieldGroupsStyled,
  GroupHeaderStyled,
  UserFieldsGroupStyled,
} from '../UserAccountFields.styled';
import { addressFormItems } from './userAddressFields';
import { UserDataPropTypes } from './UserData.props';

const UserData = ({ control, errors, ...other }) => {
  console.log({ control, errors, ...other });

  const theme = useTheme();
  return (
    <FieldGroupsStyled>
      <UserFieldsGroupStyled theme={theme}>
        <GroupHeaderStyled theme={theme}>
          Personal Information
        </GroupHeaderStyled>
        <FirstNameController
          control={control}
          errors={errors}
          InputLabelProps={{
            shrink: true,
          }}
          autoComplete="off"
        />
        <LastNameController
          control={control}
          errors={errors}
          InputLabelProps={{
            shrink: true,
          }}
          autoComplete="off"
        />
        <EmailController
          control={control}
          errors={errors}
          InputLabelProps={{
            shrink: true,
          }}
          autoComplete="off"
        />
        <PhoneController control={control} errors={errors} autoComplete="off" />
      </UserFieldsGroupStyled>
      <UserFieldsGroupStyled theme={theme}>
        <GroupHeaderStyled theme={theme}>Change Password</GroupHeaderStyled>
        <PasswordController
          control={control}
          errors={errors}
          label="Current Password"
          placeholder="Enter your current password"
          InputLabelProps={{
            shrink: true,
          }}
          autoComplete="off"
        />
        <PasswordController
          control={control}
          errors={errors}
          label="New Password"
          placeholder="Enter a new password"
          InputLabelProps={{
            shrink: true,
          }}
          autoComplete="off"
        />
      </UserFieldsGroupStyled>
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
