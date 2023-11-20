import { AppCarousel } from '@/shared/AppCarousel/AppCarousel';
import ChefCard from '../ChefCard/ChefCard';

// Mok array of schefs
const chefArray = [
  {
    name: 'Chef Giovanni',
    rate: 4.7,
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Chef Isabella',
    rate: 4.5,
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Chef Antonio',
    rate: 4.2,
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Chef Sophia',
    rate: 4.9,
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Chef Marco',
    rate: 4.4,
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Chef Isidore',
    rate: 4.8,
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Chef Gabriella',
    rate: 4.6,
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Chef Luigi',
    rate: 4.3,
    image: 'https://via.placeholder.com/300',
  },
];

export const CarouselChefs = () => {
  return (
    <AppCarousel>
      {chefArray.map((data, index) => (
        <ChefCard key={index} chefInfo={data} />
      ))}
    </AppCarousel>
  );
};
