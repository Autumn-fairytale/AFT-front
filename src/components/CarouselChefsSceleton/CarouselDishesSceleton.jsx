import { AppCarousel } from '@/shared/AppCarousel/AppCarousel';
import { ChefCardSceleton } from '../ChefCardSceleton/ChefCardSceleton';

export const CarouselChefsSceleton = () => {
  return (
    <AppCarousel>
      {Array.from({ length: 5 }).map((item, index) => (
        <ChefCardSceleton key={index} isCarousel={true} />
      ))}
    </AppCarousel>
  );
};
