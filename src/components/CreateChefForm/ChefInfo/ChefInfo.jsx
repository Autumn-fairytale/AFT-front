import { useState } from 'react';

import { Box, Typography } from '@mui/material';

import AddressForm from '@/components/AddressForm/AddressForm';
import { ChefInfoWrapper } from '@/components/Profiles/ChefProfile.styled';
import { AppPhoneInput, AppSelect } from '@/shared';
import { UploadChefFiles } from '../UploadChefFiles/UploadChefFiles';
import { ChefInfoPropTypes } from './ChefInfo.props';
import {
  ChefFieldsWrapper,
  FieldWrapper,
  InfoWrapper,
} from './ChefInfo.styled';
import ChefInfoField from './ChefInfoField/ChefInfoField';

const ChefInfo = ({ control, errors }) => {
  const [, setAvatar] = useState();
  const [, setCertificate] = useState();
  const accountStatus = [
    'pending',
    'active',
    'verified',
    'rejected',
    'blocked',
  ];

  const [selectedOption, setSelectedOption] = useState(accountStatus[0]);
  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <ChefInfoWrapper>
      <Typography
        component="h3"
        variant="subtitle1"
        sx={{ fontSize: '18px', textAlign: 'center' }}
      >
        Avatar
        <Box component="span" sx={{ color: 'red' }}>
          *
        </Box>
      </Typography>
      <UploadChefFiles
        control={control}
        setValue={() => setAvatar()}
        isAvatar={true}
        id="avatar"
      />

      <InfoWrapper>
        <ChefFieldsWrapper>
          <ChefInfoField
            info={{
              title: 'Phone number',
              name: 'phoneNumber',
              component: <AppPhoneInput />,
              required: true,
            }}
            control={control}
            error={errors['phoneNumber']?.phoneNumber}
          />
          <Typography component="h3" variant="h6" marginTop="5px">
            Address
          </Typography>
          <AddressForm control={control} errors={errors} />
          <FieldWrapper>
            <ChefInfoField
              info={{
                title: 'Account status',
                name: 'accountStatus',
                component: (
                  <AppSelect
                    options={accountStatus}
                    onChange={handleSelect}
                    value={selectedOption || accountStatus[1]}
                  />
                ),
                required: true,
              }}
              control={control}
              error={errors['accountStatus']?.accountStatus}
            />
          </FieldWrapper>
        </ChefFieldsWrapper>
        <Box>
          <Typography
            component="h3"
            variant="subtitle1"
            sx={{ fontSize: '18px' }}
          >
            Certificate
            <Box component="span" sx={{ color: 'red' }}>
              *
            </Box>
          </Typography>
          <UploadChefFiles
            control={control}
            setValue={() => setCertificate()}
            id="certificate"
          />
        </Box>
      </InfoWrapper>
    </ChefInfoWrapper>
  );
};

ChefInfo.propTypes = ChefInfoPropTypes;

export default ChefInfo;
