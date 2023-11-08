import DishCart from './components/DishCard/DishCart';

function App() {
  const dishInfo = {
    dishname: 'Burger Magic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price: '49',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-p/14/47/10/d9/sweet-potato-burger.jpg',
  };

  return (
    <>
      <DishCart dishInfo={dishInfo} />
    </>
  );
}

export default App;
