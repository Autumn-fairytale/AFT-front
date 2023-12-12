import { useEffect, useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import {
  PiCertificate,
  PiForkKnife,
  PiHeart,
  PiPhoneCall,
} from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import StarIcon from '@mui/icons-material/Star';
import { Avatar, Divider, IconButton, Rating, Typography } from '@mui/material';

import { getFavorite } from '@/api/favorites/getFavorite';
import { customColors, route } from '@/constants';
import { useAddFavorite } from '@/hooks/favorites/useAddFavorite';
import { useDeleteFavorite } from '@/hooks/favorites/useDeleteFavorite';
import { selectUser } from '@/redux/auth/selectors';
import { AppButton } from '@/shared';
import { AppModal } from '@/shared/AppModal/AppModal';
import { theme } from '@/theme';
import {
  ButtonIcon,
  ChefButtonsWrapper,
  ChefCertificate,
  InfoWrapper,
  Location,
  Name,
  ProfileWrapper,
  RateWrapper,
} from '../Profile.styled';
import { ChefProfilePropTypes } from './ChefProfile.props';

const ChefProfile = ({ chefInfo, isChef, sectionRef }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const userId = useSelector(selectUser)?.id;

  const handleScrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const chefId = chefInfo?.chefId;
  const [favoriteChefsIds, setFavoriteChefsIds] = useState([]);
  useEffect(() => {
    if (userId) {
      const fetchFavorite = async () => {
        const data = await getFavorite(userId, 'chefs');
        setFavoriteChefsIds(data);
      };
      fetchFavorite();
    }
  }, [userId]);

  useEffect(() => {
    const favoriteChefsFind =
      favoriteChefsIds?.favoriteChefs?.map((i) => i._id) || [];
    const foundChefs = favoriteChefsFind?.includes(chefId);
    if (foundChefs) {
      setFavorite(true);
    }
  }, [favoriteChefsIds]);

  const { mutate: addFavorite } = useAddFavorite('chefs', chefId);
  const { mutate: deleteFavorite } = useDeleteFavorite('chefs', chefId);
  const handleAddFavorites = () => {
    if (!favorite) {
      addFavorite();
      setFavorite(!favorite);
    } else {
      deleteFavorite();
      setFavorite(!favorite);
    }
  };

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
            <Typography
              sx={{
                marginTop: '8px',
                marginRight: '10px',
                color:
                  chefInfo?.isAvailable === 'NON-ACTIVE'
                    ? theme.palette.error.main
                    : 'green',
                fontWeight: 600,
              }}
            >
              {chefInfo?.isAvailable}
            </Typography>
            <IconButton onClick={() => setIsModalOpen(true)}>
              <PiCertificate />
            </IconButton>
            {!isChef && userId && (
              <IconButton onClick={() => handleAddFavorites()}>
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
            {/* {isChef && (
              <IconButton>
                <IoTrashOutline />
              </IconButton>
            )} */}
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
              <Rating
                name="text-feedback"
                size="large"
                value={chefInfo?.rate}
                readOnly
                precision={0.5}
                icon={
                  <StarIcon
                    style={{ color: customColors.primaryColor }}
                    fontSize="inherit"
                  />
                }
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </RateWrapper>
          )}
          {!isChef && (
            <ChefButtonsWrapper>
              <AppButton
                variant="outlined"
                label="Menu"
                startIcon={<PiForkKnife />}
                onClick={handleScrollToSection}
              ></AppButton>
            </ChefButtonsWrapper>
          )}
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
