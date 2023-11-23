import { useParams } from 'react-router-dom';

import { Main } from '@/shared/Main/Main';

const ChefDishInfoPage = () => {
  const { dishId } = useParams();

  return <Main>Chef Dish Info Page: {dishId}</Main>;
};

export default ChefDishInfoPage;
