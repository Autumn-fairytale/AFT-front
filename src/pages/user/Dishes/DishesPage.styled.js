import InfiniteScroll from 'react-infinite-scroll-component';

import Typography from '@mui/material/Typography';

import styled from '@emotion/styled';

export const TypographyStyled = styled(Typography)`
  margin-top: 16px;
  text-align: center;
  font-weight: 600;
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

export const SkeletonCardItem = styled.li`
  min-height: 500px;
  max-height: 100%;
`;

export const SkeletonWrapper = styled.ul`
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 24px;
`;
