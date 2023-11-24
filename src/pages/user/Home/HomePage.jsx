import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import { Main } from '@/shared/Main/Main';

const dishArray = [
  {
    name: 'Spaghetti',
    price: 12.99,
    description: 'Classic Italian pasta with savory Bolognese sauce.',
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Grilled Salmon',
    price: 18.99,
    description: 'Delicious grilled salmon seasoned to perfection.',
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Vegetarian Pizza',
    price: 15.99,
    description: 'A delightful pizza with a variety of fresh vegetables.',
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Chicken Alfredo',
    price: 14.99,
    description: 'Creamy Alfredo sauce with tender chicken over pasta.',
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Caesar Salad',
    price: 9.99,
    description: 'Fresh and crisp Caesar salad with homemade dressing.',
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Beef Tacos',
    price: 11.99,
    description: 'Savory beef tacos with a variety of toppings.',
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Chocolate Brownie',
    price: 7.99,
    description: 'Decadent chocolate brownie with a rich fudge topping.',
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Fruit Smoothie',
    price: 6.99,
    description: 'Refreshing fruit smoothie made with a blend of fresh fruits.',
    image: 'https://via.placeholder.com/300',
  },
];

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

const HomePage = () => {
  return (
    <Main>
      <Hero />
      <Overview title="Random dishes" type="dish" data={dishArray} />
      <Overview title="Popular dishes" type="dish" data={dishArray} />
      <Overview title="Popular chefs" type="chef" data={chefArray} />
    </Main>
  );
};

export default HomePage;
