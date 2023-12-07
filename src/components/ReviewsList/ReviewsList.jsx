/* eslint-disable no-unused-vars */
import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
// Add sceleton
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getReviewsByDishId } from '../../api/getReviewsByDishId';
import ReviewsItem from '../ReviewsItem/ReviewsItem';
import { ReviewsListProps } from './ReviewsList.props';
import {
  InfiniteScrollStyled,
  ReviewsListStyled,
  TitleWrapper,
} from './ReviewsList.styled';

export const ReviewsList = ({ dishId }) => {
  const [totalPages, setTotalPage] = useState(null);
  const LIMIT = 10;

  const fetchReviews = async ({ pageParam }) => {
    const res = await getReviewsByDishId(dishId, pageParam, LIMIT);
    setTotalPage(Math.ceil(res.totalReviews / LIMIT));
    return res;
  };

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['reviews', dishId],
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

  console.log('qtyReviews:', qtyReviews);
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
                <ReviewsItem key={review.id} review={review} />
              ))
            )}
          </ReviewsListStyled>
        </InfiniteScrollStyled>
      )}
    </>
  );
};

ReviewsList.propTypes = ReviewsListProps;
