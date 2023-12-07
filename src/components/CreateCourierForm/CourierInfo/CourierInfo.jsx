import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import AddressForm from '@/components/AddressForm/AddressForm';
import { UploadChefFiles } from '@/components/CreateChefForm/UploadChefFiles/UploadChefFiles';
import { FOLDERS } from '@/constants/mocks';
import { AppPhoneInput, AppSelect, AppTextInput } from '@/shared';
import { CourierInfoPropTypes } from './CourierInfo.props';
import {
  CourierFieldsWrapper,
  CourierInfoWrapper,
  FieldWrapper,
  InfoWrapper,
} from './CourierInfo.styled';
import CourierInfoField from './CourierInfoField/CourierInfoField';

import LiqPayLogo from '../../../assets/images/liqpay.png';

const CourierInfo = ({ control, errors, avatar, setValue }) => {
  const accountStatus = [
    'pending',
    'active',
    'verified',
    'rejected',
    'blocked',
  ];
  const vehicleType = ['none', 'bicycle', 'motorcycle', 'car'];

  const [selectedAccountStatus, setSelectedAccountStatus] = useState('pending');
  const [selectedVehicleType, setSelectedVehicleType] = useState('none');

  return (
    <CourierInfoWrapper>
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
        setValue={setValue}
        isAvatar={true}
        id="avatar"
        initialImage={avatar}
        folder={FOLDERS.AVATARS}
      />

      <InfoWrapper>
        <CourierFieldsWrapper>
          <CourierInfoField
            info={{
              title: 'Phone number',
              name: 'phoneNumber',
              component: <AppPhoneInput wrapperStyle={{ width: '620px' }} />,
              required: true,
            }}
            control={control}
            error={errors['phoneNumber']?.phoneNumber}
          />
          <FieldWrapper>
            <CourierInfoField
              info={{
                title: 'Account status',
                name: 'accountStatus',
                component: (
                  <AppSelect
                    options={accountStatus}
                    onChange={(e) => setSelectedAccountStatus(e.target.value)}
                    value={selectedAccountStatus}
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
            <CourierInfoField
              info={{
                title: 'Vehicle type',
                name: 'vehicleType',
                component: (
                  <AppSelect
                    options={vehicleType}
                    onChange={(e) => setSelectedVehicleType(e.target.value)}
                    value={selectedVehicleType}
                    wrapperStyle={{ width: '300px' }}
                    placeholder="Vehicle type"
                    defaultValue={vehicleType[0]}
                  />
                ),
                required: true,
              }}
              control={control}
              error={errors['vehicleType']?.vehicleType}
            />
          </FieldWrapper>

          <Typography component="h3" variant="h6" marginTop="10px">
            Address
          </Typography>
          <AddressForm control={control} errors={errors} />
          <FieldWrapper>
            <CourierInfoField
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
            <Link
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
            </Link>
          </FieldWrapper>
        </CourierFieldsWrapper>
      </InfoWrapper>
    </CourierInfoWrapper>
  );
};

CourierInfo.propTypes = CourierInfoPropTypes;

export default CourierInfo;
