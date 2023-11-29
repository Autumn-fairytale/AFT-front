/* eslint-disable no-unused-vars */
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLocation } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getReviewsByChefId } from '../../api/getReviewsByChefId';
import { getReviewsByDishId } from '../../api/getReviewsByDishId';
import ReviewsItem from '../ReviewsItem/ReviewsItem';
import { ReviewsListProps } from './ReviewsList.props';
import { ReviewsListStyled, TitleWrapper } from './ReviewsList.styled';

export const ReviewsList = ({ id }) => {
  const location = useLocation();
  const path = location.pathname;

  const [totalPages, setTotalPage] = useState(null);

  const LIMIT = 5;

  const fetchReviews = async ({ pageParam }) => {
    const res = path.includes('/chefs/')
      ? await getReviewsByChefId(id, pageParam, LIMIT)
      : await getReviewsByDishId(id, pageParam, LIMIT);
    setTotalPage(Math.ceil(res.totalReviews / LIMIT));

    return res;
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['reviews', path, id],
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
      {data ? (
        <InfiniteScroll
          dataLength={qtyReviews}
          scrollThreshold={0.9}
          next={() => fetchNextPage()}
          hasMore={hasNextPage}
          loader={<h4>Loading...</h4>}
          height={500}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <ReviewsListStyled>
            {data?.pages?.map((item) =>
              item.reviews.map((review, index) => (
                <ReviewsItem key={index} review={review} />
              ))
            )}
          </ReviewsListStyled>
        </InfiniteScroll>
      ) : (
        <p>There is no reviews</p>
      )}
    </>
  );
};

ReviewsList.propTypes = ReviewsListProps;
