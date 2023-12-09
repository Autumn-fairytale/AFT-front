import { AppCarousel } from '@/shared/AppCarousel/AppCarousel';
import DishCard from '../DishCard/DishCard';
import { CarouselDishesPropTypes } from './CarouselDishes.props';

export const CarouselDishes = ({ data }) => {
  return (
    <AppCarousel>
      {data.map((item) => (
        <DishCard key={item.id} dishInfo={item} isCarousel={true} />
      ))}
    </AppCarousel>
  );
};

CarouselDishes.propTypes = CarouselDishesPropTypes;
