import { AppCarousel } from '@/shared/AppCarousel/AppCarousel';
import DishCard from '../DishCard/DishCard';

// Mok array of disches
const dishArray = [
  {
    dishname: 'Spaghetti',
    price: 12.99,
    description: 'Classic Italian pasta with savory Bolognese sauce.',
    image: 'https://via.placeholder.com/300',
  },
  {
    dishname: 'Grilled Salmon',
    price: 18.99,
    description: 'Delicious grilled salmon seasoned to perfection.',
    image: 'https://via.placeholder.com/300',
  },
  {
    dishname: 'Vegetarian Pizza',
    price: 15.99,
    description: 'A delightful pizza with a variety of fresh vegetables.',
    image: 'https://via.placeholder.com/300',
  },
  {
    dishname: 'Chicken Alfredo',
    price: 14.99,
    description: 'Creamy Alfredo sauce with tender chicken over pasta.',
    image: 'https://via.placeholder.com/300',
  },
  {
    dishname: 'Caesar Salad',
    price: 9.99,
    description: 'Fresh and crisp Caesar salad with homemade dressing.',
    image: 'https://via.placeholder.com/300',
  },
  {
    dishname: 'Beef Tacos',
    price: 11.99,
    description: 'Savory beef tacos with a variety of toppings.',
    image: 'https://via.placeholder.com/300',
  },
  {
    dishname: 'Chocolate Brownie',
    price: 7.99,
    description: 'Decadent chocolate brownie with a rich fudge topping.',
    image: 'https://via.placeholder.com/300',
  },
  {
    dishname: 'Fruit Smoothie',
    price: 6.99,
    description: 'Refreshing fruit smoothie made with a blend of fresh fruits.',
    image: 'https://via.placeholder.com/300',
  },
];

export const CarouselDisches = () => {
  return (
    <AppCarousel>
      {dishArray.map((data, index) => (
        <DishCard key={index} dishInfo={data} />
      ))}
    </AppCarousel>
  );
};
