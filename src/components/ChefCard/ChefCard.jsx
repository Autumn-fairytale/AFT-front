import { useEffect, useState } from 'react';
import { PiHeart, PiStarFill } from 'react-icons/pi';

import { IconButton } from '@mui/material';

import { customColors } from '@/constants';
import { useAddFavorite } from '@/hooks/favorites/useAddFavorite';
import { useDeleteFavorite } from '@/hooks/favorites/useDeleteFavorite';
import { useGetFavorite } from '@/hooks/favorites/useGetFavorite';
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

const ChefCard = ({ chefInfo, isCarousel }) => {
  const [favorite, setFavorite] = useState(false);
  const chefId = chefInfo?.chefId;

  const favoriteChefsIds = useGetFavorite('chefs');
  const favoriteChefsFind = favoriteChefsIds?.data?.favoriteChefs.map(
    (i) => i._id
  );

  const foundChefs = favoriteChefsFind?.includes(chefId);
  useEffect(() => {
    if (foundChefs) {
      setFavorite(true);
    }
  }, [foundChefs]);
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
  // console.log('chefInfo:', chefInfo);
  return (
    <ChefCardWrapper isCarousel={isCarousel}>
      <ChefImageWrapper>
        <ChefImage src={chefInfo.avatar} alt={chefInfo.name} component="img" />
        <FavoriteButton isCarousel={isCarousel}>
          <IconButton
            onClick={
              () => handleAddFavorites()
              //setFavorite(!favorite)
            }
          >
            <PiHeart
              style={{ color: favorite ? customColors.primaryColor : '' }}
            />
          </IconButton>
        </FavoriteButton>
      </ChefImageWrapper>

      <MainInfoWrapper>
        <ChefName isCarousel={isCarousel}>{chefInfo.name}</ChefName>
        <RateNumber isCarousel={isCarousel}>
          {chefInfo.rate}
          <PiStarFill
            style={{
              fontSize: isCarousel ? '20px' : '25px',
              marginLeft: '5px',
            }}
          />
        </RateNumber>
      </MainInfoWrapper>
    </ChefCardWrapper>
  );
};

ChefCard.propTypes = ChefCardPropTypes;
ChefCard.defaultProps = defaultChefCardPropTypes;

export default ChefCard;
