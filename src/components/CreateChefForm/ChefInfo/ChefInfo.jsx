import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import AddressForm from '@/components/AddressForm/AddressForm';
import { FOLDERS } from '@/constants/mocks';
import { AppPhoneInput, AppSelect, AppTextInput } from '@/shared';
import { UploadChefFiles } from '../UploadChefFiles/UploadChefFiles';
import { ChefInfoPropTypes } from './ChefInfo.props';
import {
  ChefFieldsWrapper,
  ChefInfoWrapper,
  FieldWrapper,
} from './ChefInfo.styled';
import ChefInfoField from './ChefInfoField/ChefInfoField';

import LiqPayLogo from '../../../assets/images/liqpay.png';

const ChefInfo = ({ control, errors, avatar, certificate, setValue }) => {
  const workStatus = ['active', 'non-active'];
  const [selectedOption, setSelectedOption] = useState(workStatus[0]);

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
        setValue={setValue}
        isAvatar={true}
        id="avatar"
        initialImage={avatar}
        folder={FOLDERS.AVATARS}
      />

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
            error={errors['phoneNumber']}
          />
          <ChefInfoField
            info={{
              title: 'Work status',
              name: 'isAvailable',
              component: (
                <AppSelect
                  options={workStatus}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  value={selectedOption}
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

        <Typography
          component="h3"
          variant="subtitle1"
          sx={{ fontSize: '18px', marginTop: '20px' }}
        >
          Certificate
          <Box component="span" sx={{ color: 'red' }}>
            *
          </Box>
        </Typography>
        <UploadChefFiles
          control={control}
          setValue={setValue}
          id="certificate"
          initialImage={certificate}
          folder={FOLDERS.CHEFS}
        />
      </ChefFieldsWrapper>
    </ChefInfoWrapper>
  );
};

ChefInfo.propTypes = ChefInfoPropTypes;

export default ChefInfo;
