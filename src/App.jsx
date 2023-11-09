import DishCart from './components/DishCard/DishCart';

function App() {
  const dishInfo = {
    dishname: 'Burger Magic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price: '49',
    image:
      'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/102cf51c-9220-4278-8b63-2b9611ad275e/Derivates/3831dbe2-352e-4409-a2e2-fc87d11cab0a.jpg',
  };
  return (
    <>
      <DishCart dishInfo={dishInfo} />
    </>
  );
}

export default App;
