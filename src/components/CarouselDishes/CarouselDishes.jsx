import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getFavorite } from '@/api/favorites/getFavorite';
import { selectUser } from '@/redux/auth/selectors';
import { AppCarousel } from '@/shared/AppCarousel/AppCarousel';
import DishCard from '../DishCard/DishCard';
import { CarouselDishesPropTypes } from './CarouselDishes.props';

export const CarouselDishes = ({ data }) => {
  const userId = useSelector(selectUser)?.id;
  const [favoriteDishesIds, setFavoriteDishesIds] = useState();
  useEffect(() => {
    if (userId) {
      const fetchFavorite = async () => {
        const data = await getFavorite(userId, 'dishes');
        setFavoriteDishesIds(data);
      };
      fetchFavorite();
    }
  }, [userId]);
  return (
    <AppCarousel>
      {data.map((item) => (
        <DishCard
          key={item.id}
          dishInfo={item}
          isCarousel={true}
          favoriteDishesIds={favoriteDishesIds}
        />
      ))}
    </AppCarousel>
  );
};

CarouselDishes.propTypes = CarouselDishesPropTypes;
