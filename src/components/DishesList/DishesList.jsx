import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getFavorite } from '@/api/favorites/getFavorite';
import { selectUser } from '@/redux/auth/selectors';
import DishCard from '../DishCard/DishCard';
import { DishesListPropTypes } from './DishesList.props';
import { DishesListStyled } from './DishesList.styled';

const DishesList = ({ data, isChef }) => {
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
    <DishesListStyled>
      {data.map((dish) => (
        <li key={dish.id}>
          <DishCard
            dishInfo={dish}
            isChef={isChef}
            favoriteDishesIds={favoriteDishesIds}
          />
        </li>
      ))}
    </DishesListStyled>
  );
};

export default DishesList;

DishesList.propTypes = DishesListPropTypes;
