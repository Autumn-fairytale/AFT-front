import { useParams } from 'react-router-dom';

const ChefDishInfoPage = () => {
  const { dishId } = useParams();

  return <main>Chef Dish Info Page: {dishId}</main>;
};

export default ChefDishInfoPage;
