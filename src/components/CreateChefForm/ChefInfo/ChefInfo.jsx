import { useState } from 'react';

import { Box, Typography } from '@mui/material';

import AddressForm from '@/components/AddressForm/AddressForm';
import { ChefInfoWrapper } from '@/components/Profiles/ChefProfile.styled';
import { AppPhoneInput, AppSelect, AppTextInput } from '@/shared';
import { UploadChefFiles } from '../UploadChefFiles/UploadChefFiles';
import { ChefInfoPropTypes } from './ChefInfo.props';
import {
  ChefFieldsWrapper,
  FieldWrapper,
  InfoWrapper,
} from './ChefInfo.styled';
import ChefInfoField from './ChefInfoField/ChefInfoField';

import LiqPayLogo from '../../../assets/images/liqpay.png';

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

  const [selectedOption, setSelectedOption] = useState('pending');

  const handleSelect = (e) => {
    console.log(e);
    setSelectedOption(e.target.value);
    console.log(selectedOption);
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
          <FieldWrapper>
            <ChefInfoField
              info={{
                title: 'Phone number',
                name: 'phoneNumber',
                component: <AppPhoneInput wrapperStyle={{ width: '300px' }} />,
                required: true,
              }}
              control={control}
              error={errors['phoneNumber']?.phoneNumber}
            />
            <ChefInfoField
              info={{
                title: 'Account status',
                name: 'accountStatus',
                component: (
                  <AppSelect
                    options={accountStatus}
                    onChange={handleSelect}
                    value={selectedOption}
                    wrapperStyle={{ width: '300px' }}
                    placeholder="Account status"
                    defaultValue={accountStatus[0]}
                  />
                ),
                required: true,
              }}
              control={control}
              error={errors['accountStatus']?.accountStatus}
            />
          </FieldWrapper>

          <Typography component="h3" variant="h6" marginTop="5px">
            Address
          </Typography>
          <AddressForm control={control} errors={errors} />
          <FieldWrapper>
            <ChefInfoField
              info={{
                title: 'LiqPay public key',
                name: 'liqpayKey',
                sx: { marginTop: '20px' },
                component: <AppTextInput style={{ width: '400px' }} />,
                required: true,
              }}
              control={control}
              error={errors['liqpayKey']?.liqpayKey}
            />
            <a
              to="https://www.liqpay.ua/documentation/start"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'flex-end' }}
            >
              <img
                src={LiqPayLogo}
                alt="Description of the image"
                style={{
                  width: '200px',
                }}
              />
            </a>
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
