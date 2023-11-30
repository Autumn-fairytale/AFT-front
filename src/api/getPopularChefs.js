// import { publicInstance } from './axios';

// Mock data
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
    image:
      'https://as1.ftcdn.net/v2/jpg/05/22/94/28/1000_F_522942801_qryQgMsfNALcpK4240TOrFzcqqsmnPX7.jpg',
  },
];
export const getPopularChefs = async () => {
  //const { data } = await publicInstance.get('/chefs/popular');
  //return data;

  return chefArray;
};
