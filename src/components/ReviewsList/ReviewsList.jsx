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
  console.log('path:', path);
  const [reviews, setReviews] = useState([]);
  console.log('!!reviews:', !!reviews);
  console.log('reviews.length:', reviews.length);
  const [totalPages, setTotalPage] = useState(null);

  const limit = 10;

  //  const endpoint = path.includes('/chefs/')
  //    ? `/api/reviews/by-chef/${id}?page=${page}`
  //    : `/api/reviews/by-dish/${id}?page=${page}`;

  const fetchReviews = async ({ pageParam }) => {
    console.log(pageParam);
    const res = path.includes('/chefs/')
      ? await getReviewsByChefId(id, pageParam, limit)
      : await getReviewsByDishId(id, pageParam, limit);
    setTotalPage(Math.ceil(res.totalReviews / limit));
    setReviews((prevState) => [...prevState, ...res.reviews]);
    return res;
  };

  const { fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['reviews'],
    queryFn: fetchReviews,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      console.log('allPages:', allPages);
      console.log('lastPage:', lastPage);
      const nextPage =
        allPages.length !== totalPages ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  console.log('hasNextPage:', hasNextPage);
  return (
    <>
      <TitleWrapper>
        <Typography variant="h6" style={{ lineHeight: '1.2' }}>
          Reviews
        </Typography>
      </TitleWrapper>
      {reviews.length ? (
        <InfiniteScroll
          dataLength={reviews.length}
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
            {reviews.map((review, index) => (
              <ReviewsItem key={index} review={review} />
            ))}
          </ReviewsListStyled>
        </InfiniteScroll>
      ) : (
        <p>There is no reviews</p>
      )}
    </>
  );
};

ReviewsList.propTypes = ReviewsListProps;
