import { useParams } from 'react-router-dom';

import { ReviewsList } from '@/components/ReviewsList/ReviewsList';
import { Main } from '@/shared/Main/Main';

const DishInfoPage = () => {
  const { dishId } = useParams();
  return (
    <Main>
      Dish Info Page: {dishId}
      <ReviewsList id={dishId} />
    </Main>
  );
};

export default DishInfoPage;
