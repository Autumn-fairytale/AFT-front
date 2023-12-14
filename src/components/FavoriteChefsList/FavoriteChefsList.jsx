import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getFavorite } from '@/api/favorites/getFavorite';
import { selectUser } from '@/redux/auth/selectors';
import ChefCard from '../ChefCard/ChefCard';
import { ChefListPropTypes } from '../ChefsList/ChefsList.props';
import { ChefListStyled } from '../ChefsList/ChefsList.styled';

const FavoriteChefsList = ({ data }) => {
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
    <ChefListStyled>
      {data?.map((chef) => (
        <li key={chef._id}>
          {
            <ChefCard
              chefInfo={{
                chefId: chef._id,
                avatar: chef.avatar,
                name: `${chef.firstName} ${chef.lastName}`,
                rate: chef.rating,
              }}
              favoriteChefsIds={favoriteChefsIds}
            />
          }
        </li>
      ))}
    </ChefListStyled>
  );
};

export default FavoriteChefsList;

FavoriteChefsList.propTypes = ChefListPropTypes;
