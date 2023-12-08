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
} from './CourierInfo.styled';
import CourierInfoField from './CourierInfoField/CourierInfoField';

import LiqPayLogo from '../../../assets/images/liqpay.png';

const CourierInfo = ({ control, errors, avatar, setValue }) => {
  const workStatus = ['active', 'non-active'];
  const vehicleType = ['none', 'bicycle', 'motorcycle', 'car'];

  const [selectedWorkStatus, setSelectedWorkStatus] = useState(workStatus[0]);
  const [selectedVehicleType, setSelectedVehicleType] = useState(
    vehicleType[0]
  );

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

      <CourierFieldsWrapper>
        <CourierInfoField
          info={{
            title: 'Phone number',
            name: 'phoneNumber',
            component: <AppPhoneInput wrapperStyle={{ width: '620px' }} />,
            required: true,
          }}
          control={control}
          error={errors['phoneNumber']}
        />
        <FieldWrapper>
          <CourierInfoField
            info={{
              title: 'Work status',
              name: 'isAvailable',
              component: (
                <AppSelect
                  options={workStatus}
                  onChange={(e) => setSelectedWorkStatus(e.target.value)}
                  value={selectedWorkStatus}
                  wrapperStyle={{ width: '300px' }}
                  placeholder="Work status"
                  defaultValue={workStatus[0]}
                />
              ),
              required: true,
            }}
            control={control}
            error={errors['isAvailable']}
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
            error={errors['vehicleType']}
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
            error={errors['liqpayKey']}
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
    </CourierInfoWrapper>
  );
};

CourierInfo.propTypes = CourierInfoPropTypes;

export default CourierInfo;
