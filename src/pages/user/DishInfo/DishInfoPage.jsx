import { useParams } from 'react-router-dom';

import { ChefCardSceleton } from '@/components/ChefCardSceleton/ChefCardSceleton';
import { DishCardSceleton } from '@/components/DishCardSceleton/DishCardSceleton';
import { ReviewsList } from '@/components/ReviewsList/ReviewsList';
import { AppCarousel } from '@/shared/AppCarousel/AppCarousel';
import { Main } from '@/shared/Main/Main';
import { ReviewForm } from '../../../components/ReviewForm/ReviewForm';
import { useModal } from '../../../hooks/useModal';
import { AppModal } from '../../../shared/AppModal/AppModal';

const DishInfoPage = () => {
  const { dishId } = useParams();
  const { isOpen, openModal, onClose } = useModal();

  return (
    <Main>
      Dish Info Page: {dishId}
      <button onClick={openModal}>Add review</button>
      <AppCarousel>
        <DishCardSceleton isCarousel={true} />
        <DishCardSceleton isCarousel={true} />
        <DishCardSceleton isCarousel={true} />
        <DishCardSceleton isCarousel={true} />
        <DishCardSceleton isCarousel={true} />
      </AppCarousel>
      <AppCarousel>
        <ChefCardSceleton isCarousel={true} />
        <ChefCardSceleton isCarousel={true} />
        <ChefCardSceleton isCarousel={true} />
        <ChefCardSceleton isCarousel={true} />
        <ChefCardSceleton isCarousel={true} />
      </AppCarousel>
      <AppModal isOpen={isOpen} onClose={onClose}>
        <ReviewForm dishId={dishId} onClose={onClose} />
      </AppModal>
      <ReviewsList id={dishId} />
    </Main>
  );
};

export default DishInfoPage;
