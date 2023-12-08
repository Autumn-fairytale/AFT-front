import { IoLocationOutline } from 'react-icons/io5';
import {
  IoHomeOutline,
  IoSettingsOutline,
  IoTrashOutline,
} from 'react-icons/io5';
import { PiPhoneCall } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { Avatar, Divider, IconButton } from '@mui/material';

import { route } from '@/constants';
import {
  ButtonIcon,
  InfoWrapper,
  Location,
  Name,
  ProfileWrapper,
} from '../Profile.styled';
import { CourierProfilePropTypes } from './CourierProfile.props';

const CourierProfile = ({ courierInfo }) => {
  return (
    <>
      <ProfileWrapper>
        <Avatar
          alt={courierInfo?.name}
          src={courierInfo?.avatar}
          sx={{
            width: 270,
            height: 270,
          }}
        />
        <InfoWrapper>
          <ButtonIcon>
            <Link to={`${route.COURIER_PROFILE}`}>
              <IconButton>
                <IoSettingsOutline />
              </IconButton>
            </Link>
            <IconButton>
              <IoTrashOutline />
            </IconButton>
          </ButtonIcon>
          <Name>{courierInfo?.name}</Name>

          <Location>
            <IoLocationOutline
              style={{
                fontSize: '22px',
                marginRight: '10px',
                marginTop: '2px',
              }}
            />
            {courierInfo?.address?.country + ', ' + courierInfo?.address?.city}
          </Location>

          <>
            <Location style={{ marginTop: '10px' }}>
              <IoHomeOutline
                style={{
                  fontSize: '22px',
                  marginRight: '10px',
                  marginTop: '2px',
                }}
              />
              {courierInfo?.address.street +
                ', ' +
                courierInfo?.address.houseNumber +
                ', ' +
                courierInfo?.address.apartment}
            </Location>
            <Location style={{ marginTop: '20px' }}>
              <PiPhoneCall
                style={{
                  fontSize: '24px',
                  marginRight: '10px',
                  marginTop: '2px',
                }}
              />
              {courierInfo?.phoneNumber}
            </Location>
            <Location style={{ marginTop: '20px', fontSize: '18px' }}>
              Account status
              {': ' + courierInfo?.accountStatus}
            </Location>
            <Location style={{ marginTop: '20px', fontSize: '18px' }}>
              Vehicle type
              {': ' + courierInfo?.vehicleType}
            </Location>
          </>
        </InfoWrapper>
      </ProfileWrapper>
      <Divider />
    </>
  );
};

CourierProfile.propTypes = CourierProfilePropTypes;

export default CourierProfile;
