import { AppCarousel } from '@/shared/AppCarousel/AppCarousel';
import ChefCard from '../ChefCard/ChefCard';
import { CarouselChefsPropTypes } from './CarouselChefs.props';

export const CarouselChefs = ({ data }) => {
  return (
    <AppCarousel>
      {data.map((item, index) => (
        <ChefCard key={index} chefInfo={item} carousel={true} />
      ))}
    </AppCarousel>
  );
};

CarouselChefs.propTypes = CarouselChefsPropTypes;
