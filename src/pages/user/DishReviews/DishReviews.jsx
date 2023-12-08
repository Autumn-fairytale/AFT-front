import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getDishById } from '@/api';
import NoFoundDish from '@/assets/images/Dishes_page/vecteezy_icon-image-not-found-vector_.jpg';
import { DishName } from '@/components/DishCard/DishCard.styled';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { ReviewsList } from '@/components/ReviewsList/ReviewsList';
import { selectIsAuth } from '@/redux/auth/selectors';
import { AppButton, AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';
import { useQuery } from '@tanstack/react-query';
import { ReviewForm } from '../../../components/ReviewForm/ReviewForm';
import { useModal } from '../../../hooks/useModal';
import { AppModal } from '../../../shared/AppModal/AppModal';
import {
  ContentWrapper,
  DishImageStyled,
  DishInfoWrapper,
  SkeletonStyled,
} from './DishInfoPage.styled';

const DishInfoPage = () => {
  const isAuth = useSelector(selectIsAuth);
  const { dishId } = useParams();
  const { isOpen, openModal, onClose } = useModal();
  const { data: dish, isLoading } = useQuery({
    queryKey: ['dish', dishId],
    queryFn: () => getDishById(dishId),
  });

  return (
    <Main>
      <AppContainer>
        <PageTitle>REVIEWS</PageTitle>
        <ContentWrapper>
          <DishInfoWrapper>
            {isLoading ? (
              <SkeletonStyled variant="rectangular" width={300} height={300} />
            ) : (
              <>
                <DishName>{dish?.name}</DishName>
                <DishImageStyled
                  src={dish?.image || NoFoundDish}
                  alt={dish?.name}
                  component="img"
                  width="300"
                  height="300"
                  onError={(e) => {
                    e.target.src = NoFoundDish;
                  }}
                />
                {isAuth && dish && (
                  <AppButton onClick={openModal} label="Add review" />
                )}
              </>
            )}
          </DishInfoWrapper>

          <ReviewsList dishId={dishId} />
        </ContentWrapper>

        <AppModal isOpen={isOpen} onClose={onClose}>
          <ReviewForm dishId={dishId} onClose={onClose} />
        </AppModal>
      </AppContainer>
    </Main>
  );
};

export default DishInfoPage;
