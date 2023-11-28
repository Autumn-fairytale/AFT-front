import { Controller } from 'react-hook-form';

import { Box, Typography } from '@mui/material';

import { AppPhoneInput, AppTextInput } from '@/shared';
import { AppTextArea } from '@/shared/AppTextArea/AppTextArea';
import { DeliveryInfoPropTypes } from './DeliveryInfo.props';
import {
  DeliveryInfoSectionStyled,
  DividerStyled,
} from './DeliveryInfo.styled';

const DeliveryInfo = ({ control }) => {
  return (
    <DeliveryInfoSectionStyled>
      <Typography component="h2" variant="h4">
        Delivery information
      </Typography>

      <Box sx={{ marginTop: '20px' }}>
        <Box sx={{ width: '250px' }}>
          <Typography component="h3" variant="h6">
            Phone number
          </Typography>

          <AppPhoneInput label="" name="phone" autoComplete="tel" />
        </Box>
        <DividerStyled />
        <Box>
          <Typography component="h3" variant="h6">
            Name
          </Typography>
          <Controller
            name="userName"
            control={control}
            render={({ field }) => (
              <AppTextInput label="" autoComplete="name" {...field} />
            )}
          />
          {/* <AppTextInput label="" name="name" autoComplete="name" /> */}
        </Box>
        <DividerStyled />
        <Box>
          <Typography component="h3" variant="h6">
            Address
          </Typography>
          <Typography component="h4" variant="subtitle1">
            Country
          </Typography>
          <Controller
            name="address.country"
            control={control}
            render={({ field }) => (
              <AppTextInput label="" autoComplete="country" {...field} />
            )}
          />

          <Typography component="h4" variant="subtitle1">
            City
          </Typography>
          <Controller
            name="address.city"
            control={control}
            render={({ field }) => (
              <AppTextInput label="" autoComplete="street-address" {...field} />
            )}
          />
          <Typography component="h4" variant="subtitle1">
            Street
          </Typography>
          <Controller
            name="address.street"
            control={control}
            render={({ field }) => (
              <AppTextInput label="" autoComplete="street-address" {...field} />
            )}
          />
        </Box>
        <DividerStyled />
        <Box>
          <Typography component="h3" variant="h6">
            Additional info
          </Typography>
          <Controller
            name="additionalInfo"
            control={control}
            render={({ field }) => <AppTextArea label="" {...field} />}
          />
          {/* <AppTextArea label="" name="message" value="" onChange={() => {}} /> */}
        </Box>
      </Box>
    </DeliveryInfoSectionStyled>
  );
};

DeliveryInfo.propTypes = DeliveryInfoPropTypes;

export default DeliveryInfo;
