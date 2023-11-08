import { useParams } from 'react-router-dom';

const DishInfoPage = () => {
  const { dishId } = useParams();
  return <main>Dish Info Page: {dishId}</main>;
};

export default DishInfoPage;
