import InfiniteScroll from 'react-infinite-scroll-component';

import styled from '@emotion/styled';

export const ReviewsListStyled = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 16px;

  & > :not(:last-child) {
    border-bottom: 1px solid grey;
  }

  & > :nth-of-type(even) {
    background-color: #eff0f0;
  }
`;

export const InfiniteScrollStyled = styled(InfiniteScroll)`
  margin-bottom: 20px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #e4dcdc;
    /* border-radius: 8px; */
    /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ff7622;
    /* border-radius: 8px; */
    /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6); */
  }
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NoReviewsMessage = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
