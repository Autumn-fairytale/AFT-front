/* eslint-disable no-unused-vars */
import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
// Add sceleton
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getReviewsByDishId } from '../../api/reviews/getReviewsByDishId';
import ReviewsItem from '../ReviewsItem/ReviewsItem';
import { ReviewsListProps } from './ReviewsList.props';
import {
  InfiniteScrollStyled,
  NoReviewsMessage,
  ReviewsListStyled,
  SkeletonWrapper,
} from './ReviewsList.styled';

import styles from './InfiniteScroll.css';

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

  return (
    <>
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
        </SkeletonWrapper>
      )}
      {/* Check if reviews are available */}
      {data && qtyReviews > 0 && !isLoading && (
        <InfiniteScrollStyled
          dataLength={qtyReviews}
          scrollThreshold={0.8}
          next={() => fetchNextPage()}
          hasMore={hasNextPage}
          height="900px"
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

      {data && qtyReviews === 0 && !isLoading && (
        <NoReviewsMessage>
          <Typography variant="h5" component="p">
            No reviews have been posted yet. <br />
            Be the first one to share your thoughts!
          </Typography>
        </NoReviewsMessage>
      )}
      {!data && !isLoading && (
        <NoReviewsMessage>
          <Typography variant="h5" component="p">
            Dish not found
          </Typography>
        </NoReviewsMessage>
      )}
    </>
  );
};

ReviewsList.propTypes = ReviewsListProps;
