import { useParams } from 'react-router-dom';

import { Main } from '@/shared/Main/Main';

const DishInfoPage = () => {
  const { dishId } = useParams();
  return <Main>Dish Info Page: {dishId}</Main>;
};

export default DishInfoPage;
