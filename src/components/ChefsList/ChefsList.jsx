import ChefCard from '../ChefCard/ChefCard';
import { ChefListPropTypes } from './ChefsList.props';
import { ChefListStyled } from './ChefsList.styled';

const ChefsList = ({ data }) => {
  console.log('data:', data);
  return (
    <ChefListStyled>
      {data?.map((chef) => (
        <li key={chef.id}>
          {
            <ChefCard
              chefInfo={{
                image: chef.avatar,
                name: `${chef.userId.firstName} ${chef.userId.lastName}`,
                rate: chef.rating,
              }}
            />
          }
        </li>
      ))}
    </ChefListStyled>
  );
};

export default ChefsList;

ChefsList.propTypes = ChefListPropTypes;
