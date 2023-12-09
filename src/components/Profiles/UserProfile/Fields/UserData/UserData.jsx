import { Box, Typography } from '@mui/material';

import PropTypes from 'prop-types';

import AddressForm from '@/components/AddressForm';
import {
  EmailController,
  FirstNameController,
  LastNameController,
  PasswordController,
  PhoneController,
} from '@/shared/AuthFormComponents/readyComponents';
import { addressFormItems } from './userAddressFields';

const UserData = ({ control, errors, ...other }) => {
  console.log({ control, errors, ...other });
  return (
    <>
      <Box>
        <Typography>Personal Information</Typography>
        <FirstNameController
          control={control}
          errors={errors}
          InputLabelProps={{
            shrink: true,
          }}
          className="user-data-form__input"
          autoComplete="off"
        />
        <LastNameController
          control={control}
          errors={errors}
          InputLabelProps={{
            shrink: true,
          }}
          className="user-data-form___input"
          autoComplete="off"
        />
        <EmailController
          control={control}
          errors={errors}
          InputLabelProps={{
            shrink: true,
          }}
          className="user-data-form___input"
          autoComplete="off"
        />
        <PhoneController
          control={control}
          errors={errors}
          className="user-data-form___input"
          autoComplete="off"
        />
      </Box>
      <Box>
        <Typography>Change Password</Typography>
        <PasswordController
          control={control}
          errors={errors}
          label="Old Password"
          InputLabelProps={{
            shrink: true,
          }}
          className="user-data-form___input"
          autoComplete="off"
        />
        <PasswordController
          control={control}
          errors={errors}
          label="New Password"
          InputLabelProps={{
            shrink: true,
          }}
          className="user-data-form___input"
          autoComplete="off"
        />
      </Box>
      <Box>
        <Typography>Address Information</Typography>
        <AddressForm
          control={control}
          errors={errors}
          addressFormItems={addressFormItems}
        />
      </Box>
    </>
  );
};

UserData.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  other: PropTypes.object,
};

export default UserData;
