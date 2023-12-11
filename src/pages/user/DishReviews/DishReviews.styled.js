import { Skeleton } from '@mui/material';

import { DishImage } from '@/components/DishCard/DishCard.styled';
import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  height: 100%;
`;

export const DishInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 20px;
`;

export const DishImageStyled = styled(DishImage)`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 4px 8px 8px rgba(255, 118, 34, 0.2);
`;

export const SkeletonStyled = styled(Skeleton)`
  height: 300px;
  width: 300px;
  border-radius: 20px;
`;

export const NoReviewsMessage = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
