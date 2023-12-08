import DishCard from '../DishCard/DishCard';
import { DishesListPropTypes } from './DishesList.props';
import { DishesListStyled } from './DishesList.styled';

const DishesList = ({ data }) => {
  return (
    <DishesListStyled>
      {data.map((dish) => (
        <li key={dish.id}>
          <DishCard dishInfo={dish} />
        </li>
      ))}
    </DishesListStyled>
  );
};

export default DishesList;

DishesList.propTypes = DishesListPropTypes;
