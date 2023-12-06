import DishCard from '../DishCard/DishCard';
import { DishCardSkeleton } from '../DishCardSkeleton/DishCardSkeleton';
import { DishesListPropTypes } from './DishesList.props';
import { DishesListStyled, SkeletonCardItem } from './DishesList.styled';

const DishesList = ({ data, isLoading }) => {
  return (
    <DishesListStyled>
      {isLoading
        ? Array.from({ length: 3 }).map((_item, index) => (
            <SkeletonCardItem SkeletonCardItem key={index}>
              <DishCardSkeleton />
            </SkeletonCardItem>
          ))
        : data?.map((dish) => (
            <li key={dish.id}>
              <DishCard dishInfo={dish} />
            </li>
          ))}
    </DishesListStyled>
  );
};

export default DishesList;

DishesList.propTypes = DishesListPropTypes;
