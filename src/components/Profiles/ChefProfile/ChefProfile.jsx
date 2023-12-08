import { useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import {
  IoHomeOutline,
  IoSettingsOutline,
  IoTrashOutline,
} from 'react-icons/io5';
import {
  PiCertificate,
  PiForkKnife,
  PiHeart,
  PiPhoneCall,
  PiStar,
  PiStarFill,
} from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { Avatar, Divider, IconButton, Rating } from '@mui/material';

import { customColors, route } from '@/constants';
import { AppButton } from '@/shared';
import { AppModal } from '@/shared/AppModal/AppModal';
import {
  ButtonIcon,
  ChefButtonsWrapper,
  ChefCertificate,
  InfoWrapper,
  Location,
  Name,
  ProfileWrapper,
  RateValue,
  RateWrapper,
} from '../Profile.styled';
import { ChefProfilePropTypes } from './ChefProfile.props';

const ChefProfile = ({ chefInfo, isChef }) => {
  const [favorite, setFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //  anchor on the menu
  //  const menuRef = useRef(null);
  //   const scrollToMenu = () => {
  //     if (menuRef.current) {
  //       menuRef.current.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   };

  return (
    <>
      <ProfileWrapper>
        <Avatar
          alt={chefInfo?.name}
          src={chefInfo?.avatar}
          sx={{ width: 270, height: 270 }}
        />
        <InfoWrapper>
          <ButtonIcon>
            <IconButton onClick={() => setIsModalOpen(true)}>
              <PiCertificate />
            </IconButton>
            {!isChef && (
              <IconButton onClick={() => setFavorite(!favorite)}>
                <PiHeart
                  style={{ color: favorite ? customColors.primaryColor : '' }}
                />
              </IconButton>
            )}

            {isChef && (
              <Link to={`${route.CHEF_PROFILE}`}>
                <IconButton>
                  <IoSettingsOutline />
                </IconButton>
              </Link>
            )}
            {isChef && (
              <IconButton>
                <IoTrashOutline />
              </IconButton>
            )}
          </ButtonIcon>
          <Name>{chefInfo?.name}</Name>

          <Location>
            <IoLocationOutline
              style={{
                fontSize: '22px',
                marginRight: '10px',
                marginTop: '2px',
              }}
            />
            {chefInfo?.address.country + ', ' + chefInfo?.address.city}
          </Location>

          {isChef && (
            <>
              <Location style={{ marginTop: '10px' }}>
                <IoHomeOutline
                  style={{
                    fontSize: '22px',
                    marginRight: '10px',
                    marginTop: '2px',
                  }}
                />
                {chefInfo?.address.street +
                  ', ' +
                  chefInfo?.address.houseNumber +
                  ', ' +
                  chefInfo?.address.apartment}
              </Location>
              <Location style={{ marginTop: '20px' }}>
                <PiPhoneCall
                  style={{
                    fontSize: '24px',
                    marginRight: '10px',
                    marginTop: '2px',
                  }}
                />
                {chefInfo?.phoneNumber}
              </Location>
              <Location style={{ marginTop: '20px' }}>
                Account status
                {': ' + chefInfo?.accountStatus}
              </Location>
            </>
          )}
          {!isChef && (
            <RateWrapper>
              <RateValue>{chefInfo?.rate}</RateValue>
              <Rating
                name="text-feedback"
                value={chefInfo?.rate}
                readOnly
                precision={0.5}
                icon={
                  <PiStarFill
                    style={{ color: customColors.primaryColor }}
                    fontSize="28px"
                  />
                }
                emptyIcon={<PiStar style={{ opacity: 0.55 }} fontSize="28px" />}
              />
            </RateWrapper>
          )}
          {!isChef && (
            <ChefButtonsWrapper>
              <AppButton
                variant="outlined"
                label="Menu"
                startIcon={<PiForkKnife />}
              ></AppButton>
            </ChefButtonsWrapper>
          )}
          {/* <Link to="#menu"></Link> */}
          <AppModal
            onClose={() => setIsModalOpen(!isModalOpen)}
            isOpen={isModalOpen}
          >
            <ChefCertificate
              src={chefInfo?.certificate}
              alt={`${chefInfo?.name}-certificate`}
            />
          </AppModal>
        </InfoWrapper>
      </ProfileWrapper>
      <Divider />
    </>
  );
};

ChefProfile.propTypes = ChefProfilePropTypes;
ChefProfile.defaultProps = {
  isChef: false,
};
export default ChefProfile;
