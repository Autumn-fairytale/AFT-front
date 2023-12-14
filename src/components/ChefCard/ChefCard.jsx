import { useEffect, useState } from 'react';
import { PiHeart, PiStarFill } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { IconButton } from '@mui/material';

import { customColors } from '@/constants';
import { useAddFavorite } from '@/hooks/favorites/useAddFavorite';
import { useDeleteFavorite } from '@/hooks/favorites/useDeleteFavorite';
import { selectUser } from '@/redux/auth/selectors';
import { ChefCardPropTypes, defaultChefCardPropTypes } from './ChefCard.props';
import {
  ChefCardWrapper,
  ChefImage,
  ChefImageWrapper,
  ChefName,
  FavoriteButton,
  MainInfoWrapper,
  RateNumber,
} from './ChefCard.styled';

const ChefCard = ({ chefInfo, isCarousel, favoriteChefsIds }) => {
  const userId = useSelector(selectUser)?.id;
  const [favorite, setFavorite] = useState(false);
  const chefId = chefInfo?.chefId;

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
    <ChefCardWrapper
      isCarousel={isCarousel}
      sx={{ boxShadow: isCarousel ? 0 : 1 }}
    >
      <ChefImageWrapper>
        <Link to={`/chefs/${chefId}`}>
          <ChefImage
            src={chefInfo.avatar}
            alt={chefInfo.name}
            component="img"
          />
        </Link>
        {userId && (
          <FavoriteButton isCarousel={isCarousel}>
            <IconButton onClick={() => handleAddFavorites()}>
              <PiHeart
                style={{ color: favorite ? customColors.primaryColor : '' }}
              />
            </IconButton>
          </FavoriteButton>
        )}
      </ChefImageWrapper>

      <Link to={`/chefs/${chefId}`}>
        <MainInfoWrapper>
          <ChefName isCarousel={isCarousel}>{chefInfo.name}</ChefName>
          <RateNumber isCarousel={isCarousel}>
            {chefInfo.rate}
            <PiStarFill
              style={{
                fontSize: isCarousel ? '22px' : '25px',
                marginLeft: '5px',
              }}
            />
          </RateNumber>
        </MainInfoWrapper>
      </Link>
    </ChefCardWrapper>
  );
};

ChefCard.propTypes = ChefCardPropTypes;
ChefCard.defaultProps = defaultChefCardPropTypes;

export default ChefCard;
