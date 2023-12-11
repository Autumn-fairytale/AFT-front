import ChefCard from '../ChefCard/ChefCard';
import { ChefListPropTypes } from '../ChefsList/ChefsList.props';
import { ChefListStyled } from '../ChefsList/ChefsList.styled';

const FavoriteChefsList = ({ data }) => {
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
            />
          }
        </li>
      ))}
    </ChefListStyled>
  );
};

export default FavoriteChefsList;

FavoriteChefsList.propTypes = ChefListPropTypes;
