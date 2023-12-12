import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getFavorite } from '@/api/favorites/getFavorite';
import { selectUser } from '@/redux/auth/selectors';
import ChefCard from '../ChefCard/ChefCard';
import { ChefListPropTypes } from './ChefsList.props';
import { ChefListStyled } from './ChefsList.styled';

const ChefsList = ({ data }) => {
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
        <li key={chef.id}>
          {
            <ChefCard
              chefInfo={{
                chefId: chef.id,
                avatar: chef.avatar,
                name: `${chef.userId.firstName} ${chef.userId.lastName}`,
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

export default ChefsList;

ChefsList.propTypes = ChefListPropTypes;
