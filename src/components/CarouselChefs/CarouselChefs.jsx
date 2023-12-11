import { AppCarousel } from '@/shared/AppCarousel/AppCarousel';
import ChefCard from '../ChefCard/ChefCard';
import { CarouselChefsPropTypes } from './CarouselChefs.props';

export const CarouselChefs = ({ data }) => {
  return (
    <AppCarousel>
      {data.map((item, index) => (
        <ChefCard
          key={index}
          chefInfo={{
            chefId: item.id,
            avatar: item.avatar,
            rate: item.rating,
            name: item.userId.firstName + ' ' + item.userId.lastName,
          }}
          isCarousel={true}
        />
      ))}
    </AppCarousel>
  );
};

CarouselChefs.propTypes = CarouselChefsPropTypes;
