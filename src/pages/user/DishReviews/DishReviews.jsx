import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Skeleton, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

import { getDishById } from '@/api';
import NoFoundDish from '@/assets/images/Dishes_page/vecteezy_icon-image-not-found-vector_.jpg';
import { DishName } from '@/components/DishCard/DishCard.styled';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { ReviewsList } from '@/components/ReviewsList/ReviewsList';
import { SkeletonWrapper } from '@/components/ReviewsList/ReviewsList.styled';
import { selectIsAuth } from '@/redux/auth/selectors';
import { AppButton, AppContainer } from '@/shared';
import { useQuery } from '@tanstack/react-query';
import { ReviewForm } from '../../../components/ReviewForm/ReviewForm';
import { useModal } from '../../../hooks/useModal';
import { AppModal } from '../../../shared/AppModal/AppModal';
import {
  ContentWrapper,
  DishImageStyled,
  DishInfoWrapper,
  NoReviewsMessage,
  SkeletonStyled,
} from './DishReviews.styled';

const DishInfoPage = () => {
  const isAuth = useSelector(selectIsAuth);
  const { dishId } = useParams();
  const { isOpen, openModal, onClose } = useModal();
  const { data: dish, isLoading } = useQuery({
    queryKey: ['dish', dishId],
    queryFn: () => getDishById(dishId),
  });

  return (
    <AppContainer>
      <PageTitle>REVIEWS</PageTitle>
      <ContentWrapper>
        <DishInfoWrapper>
          {isLoading ? (
            <>
              <Typography variant="h3" width="100%">
                <Skeleton />
              </Typography>
              <SkeletonStyled variant="rectangular" width={300} height={300} />
            </>
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
        {dish && <ReviewsList dishId={dishId} />}
        {!dish && !isLoading && (
          <NoReviewsMessage>
            <h3> Dish not found</h3>
          </NoReviewsMessage>
        )}
        {isLoading && (
          <SkeletonWrapper>
            {Array.from({ length: 4 }).map((_, index) => (
              <Box
                sx={{
                  margin: 1,
                  display: 'flex',

                  alignItems: 'center',
                  gap: 4,
                  pl: 4,
                  pr: 5,
                  m: 1,
                }}
                key={index}
              >
                <Skeleton variant="circular" sx={{ height: 40, width: 40 }}>
                  <Avatar />
                </Skeleton>
                <Skeleton animation="wave" height={60} width="100%" />
              </Box>
            ))}
          </SkeletonWrapper>
        )}
      </ContentWrapper>

      <AppModal isOpen={isOpen} onClose={onClose}>
        <ReviewForm dishId={dishId} onClose={onClose} />
      </AppModal>
    </AppContainer>
  );
};

export default DishInfoPage;
