import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ReviewsList } from '@/components/ReviewsList/ReviewsList';
import { selectIsAuth } from '@/redux/auth/selectors';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';
import { ReviewForm } from '../../../components/ReviewForm/ReviewForm';
import { useModal } from '../../../hooks/useModal';
import { AppModal } from '../../../shared/AppModal/AppModal';

const DishInfoPage = () => {
  const isAuth = useSelector(selectIsAuth);
  const { dishId } = useParams();
  const { isOpen, openModal, onClose } = useModal();

  return (
    <Main>
      <AppContainer>
        Dish Info Page: {dishId}
        {isAuth && <button onClick={openModal}>Add review</button>}
        <AppModal isOpen={isOpen} onClose={onClose}>
          <ReviewForm dishId={dishId} onClose={onClose} />
        </AppModal>
        <ReviewsList dishId={dishId} />
      </AppContainer>
    </Main>
  );
};

export default DishInfoPage;
