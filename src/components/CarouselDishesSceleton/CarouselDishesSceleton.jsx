import { AppCarousel } from '@/shared/AppCarousel/AppCarousel';
import { DishCardSceleton } from '../DishCardSceleton/DishCardSceleton';

export const CarouselDishesSceleton = () => {
  return (
    <AppCarousel>
      {Array.from({ length: 5 }).map((item, index) => (
        <DishCardSceleton key={index} isCarousel={true} />
      ))}
    </AppCarousel>
  );
};
