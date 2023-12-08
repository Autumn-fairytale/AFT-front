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

export const TitleWrapper = styled.div`
  border-bottom: 1px solid #ff7622;
  margin-bottom: 12px;
`;

export const InfiniteScrollStyled = styled(InfiniteScroll)`
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #e4dcdc;
    border-radius: 8px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ff7622;
    border-radius: 8px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6);
  }
`;
