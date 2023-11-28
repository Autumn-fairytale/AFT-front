import { useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import {
  PiCertificate,
  PiForkKnife,
  PiHeart,
  PiStar,
  PiStarFill,
} from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { Avatar, Divider, IconButton, Rating } from '@mui/material';

import PropTypes from 'prop-types';

import { customColors } from '@/constants';
import { AppButton } from '@/shared';
import { AppModal } from '@/shared/AppModal/AppModal';
import {
  ChefButtonsWrapper,
  ChefCertifaicate,
  ChefInfoWrapper,
  ChefLocation,
  ChefName,
  ChefProfileWrapper,
  FavoriteButton,
  RateValue,
  RateWrapper,
} from './ChefProfile.styled';

const ChefProfile = ({ chefInfo }) => {
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
      <ChefProfileWrapper>
        <Avatar
          alt={chefInfo.name}
          src={chefInfo.avatar}
          sx={{ width: 270, height: 270 }}
        />
        <ChefInfoWrapper>
          <FavoriteButton>
            <IconButton onClick={() => setIsModalOpen(true)}>
              <PiCertificate />
            </IconButton>
            <IconButton onClick={() => setFavorite(!favorite)}>
              <PiHeart
                style={{ color: favorite ? customColors.primaryColor : '' }}
              />
            </IconButton>
          </FavoriteButton>
          <ChefName>{chefInfo.name}</ChefName>

          <ChefLocation>
            <IoLocationOutline
              style={{ fontSize: '22px', margin: '4px 10px 4px 0px' }}
            />
            {chefInfo.city}
          </ChefLocation>
          <RateWrapper>
            <RateValue>{chefInfo.rate}</RateValue>
            <Rating
              name="text-feedback"
              value={chefInfo.rate}
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
          <ChefButtonsWrapper>
            <AppButton
              variant="outlined"
              label="Menu"
              startIcon={<PiForkKnife />}
            ></AppButton>
          </ChefButtonsWrapper>
          <Link to="#menu">
            <AppModal
              onClose={() => setIsModalOpen(!isModalOpen)}
              isOpen={isModalOpen}
            >
              <ChefCertifaicate
                src={chefInfo.certificate}
                alt={`${chefInfo.name}-certifaicate`}
              />
            </AppModal>
          </Link>
        </ChefInfoWrapper>
      </ChefProfileWrapper>
      <Divider />
    </>
  );
};

ChefProfile.propTypes = {
  chefInfo: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    phoneNumber: PropTypes.string,
    city: PropTypes.string,
    certificate: PropTypes.string,
    rate: PropTypes.number,
  }).isRequired,
};

export default ChefProfile;
