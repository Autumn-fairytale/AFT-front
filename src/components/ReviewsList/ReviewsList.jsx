/* eslint-disable no-unused-vars */
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Typography from '@mui/material/Typography';

import styled from '@emotion/styled';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getReviewsByDishId } from '../../api/getReviewsByDishId';
import ReviewsItem from '../ReviewsItem/ReviewsItem';
import { ReviewsListProps } from './ReviewsList.props';
import { ReviewsListStyled, TitleWrapper } from './ReviewsList.styled';

const InfiniteScrollStyled = styled(InfiniteScroll)`
  ::-webkit-scrollbar {
    width: 15px;
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

export const ReviewsList = ({ id }) => {
  // const path = location.pathname;

  const [totalPages, setTotalPage] = useState(null);

  const LIMIT = 5;

  const fetchReviews = async ({ pageParam }) => {
    const res = await getReviewsByDishId(id, pageParam, LIMIT);

    setTotalPage(Math.ceil(res.totalReviews / LIMIT));

    return res;
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['reviews', id],
    queryFn: fetchReviews,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        allPages.length !== totalPages ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  const qtyReviews = data?.pages
    ?.map((item) => item.reviews.map((review) => review))
    .reduce((acc, item) => acc + item.length, 0);

  return (
    <>
      <TitleWrapper>
        <Typography variant="h6" style={{ lineHeight: '1.2' }}>
          Reviews
        </Typography>
      </TitleWrapper>
      {qtyReviews && (
        <InfiniteScrollStyled
          dataLength={qtyReviews}
          scrollThreshold={0.8}
          next={() => fetchNextPage()}
          hasMore={hasNextPage}
          height={500}
        >
          <ReviewsListStyled>
            {data?.pages?.map((item) =>
              item.reviews.map((review, index) => (
                <ReviewsItem key={review.id} review={review} id={id} />
              ))
            )}
          </ReviewsListStyled>
        </InfiniteScrollStyled>
      )}
    </>
  );
};

ReviewsList.propTypes = ReviewsListProps;
