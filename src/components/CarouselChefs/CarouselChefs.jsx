import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getFavorite } from '@/api/favorites/getFavorite';
import { selectUser } from '@/redux/auth/selectors';
import { AppCarousel } from '@/shared/AppCarousel/AppCarousel';
import ChefCard from '../ChefCard/ChefCard';
import { CarouselChefsPropTypes } from './CarouselChefs.props';

export const CarouselChefs = ({ data }) => {
  const userId = useSelector(selectUser)?.id;
  const [favoriteChefsIds, setFavoriteChefsIds] = useState();

  useEffect(() => {
    if (userId) {
      const fetchFavorite = async () => {
        const data = await getFavorite(userId, 'chefs');
        setFavoriteChefsIds(data);
      };
      fetchFavorite();
    }
  }, [userId]);
  return (
    <AppCarousel>
      {data.map((item, index) => (
        <ChefCard
          key={index}
          chefInfo={{
            chefId: item.chefId,
            avatar: item.chefInfo.avatar,
            rate: item.chefInfo.rating,
            name:
              item.chefInfo.user[0].firstName +
              ' ' +
              item.chefInfo.user[0].lastName,
          }}
          isCarousel={true}
          favoriteChefsIds={favoriteChefsIds}
        />
      ))}
    </AppCarousel>
  );
};

CarouselChefs.propTypes = CarouselChefsPropTypes;
