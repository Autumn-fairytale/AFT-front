/* eslint-disable no-unused-vars */
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
// Add sceleton
import Skeleton from '@mui/material/Skeleton';
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
  const [totalPages, setTotalPage] = useState(null);
  const LIMIT = 5;

  const fetchReviews = async ({ pageParam }) => {
    const res = await getReviewsByDishId(id, pageParam, LIMIT);
    setTotalPage(Math.ceil(res.totalReviews / LIMIT));
    return res;
  };

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['reviews', id],
    queryFn: fetchReviews,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        allPages.length !== totalPages ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  // Calculate the total number of reviews
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
      {/* Check if data is loading */}
      {isLoading &&
        Array.from({ length: 4 }).map((_, index) => (
          <Box
            sx={{
              margin: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              pl: 4,
              pr: 5,
              m: 0,
            }}
            key={index}
          >
            <Skeleton variant="circular" sx={{ height: 40, width: 40 }}>
              <Avatar />
            </Skeleton>
            <Skeleton animation="wave" height={60} width="100%" />
          </Box>
        ))}
      {/* Check if reviews are available */}
      {qtyReviews > 0 && (
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
