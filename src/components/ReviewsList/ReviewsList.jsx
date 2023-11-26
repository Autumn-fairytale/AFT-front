import { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLocation } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import ReviewsItem from '../ReviewsItem/ReviewsItem';
import { ReviewsListProps } from './ReviewsList.props';
import { ReviewsListStyled, TitleWrapper } from './ReviewsList.styled';

export const ReviewsList = ({ id }) => {
  const location = useLocation();
  const [reviewsArray, setReviewsArray] = useState([]);
  console.log('reviewsArray:', reviewsArray);

  const [page, setPage] = useState(1);

  const [totalPage, setTotalPage] = useState(null);

  const [hasMore, setHasMore] = useState(true);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const path = location.pathname;
    if (totalPage && page > totalPage) {
      setHasMore(false);
      return;
    }

    const endpoint = path.includes('/chefs/')
      ? `/api/reviews/by-chef/${id}?page=${page}`
      : `/api/reviews/by-dish/${id}?page=${page}`;

    fetch(`http://localhost:4000${endpoint}`)
      .then((response) => response.json())
      .then((/*data*/) => {
        setReviewsArray((prevArray) => [
          ...prevArray,
          ...Array.from({ length: 20 }).fill({
            id: '6554771a797f3a70dd642a9e',
            owner: {
              id: '654fe4de18f1f5f14f2e1cca',
              firstName: 'Sophia',
              lastName: 'Clark',
              avatar: 'url_to_avatar_10',
            },
            dish: '6555336759cc4def8b9ea8f8',
            rating: 3,
            review:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur suscipit incidunt, cum totam quam rem porro aspernatur nesciunt a obcaecati explicabo quibusdam rerum quod vel ratione sed recusandae blanditiis facere delectus voluptatem consequatur reprehenderit magnam molestias? Expedita architecto optio dolores doloremque ab, soluta maiores harum, vel corporis aspernatur sed incidunt aliquid officia eveniet! Eligendi debitis id velit veritatis. Quia sint voluptatum magni dolorum quisquam quaerat aspernatur enim reiciendis vel quam eos, nobis, modi deleniti ipsum. Ex ipsum beatae tenetur quidem praesentium illo fuga iure ullam deleniti! Sequi, labore nemo. Amet cumque officia dignissimos non id tempore esse. Iure, id aliquid magni repellat, eaque molestias placeat natus at saepe quis vero distinctio quisquam facere obcaecati deleniti voluptatum, culpa soluta voluptates nostrum recusandae unde quos harum suscipit. Ea delectus aspernatur debitis quisquam ipsum harum nisi inventore. Nihil facilis maiores quis numquam, odio perspiciatis illo amet, sequi a quisquam voluptatem atque et aspernatur, non soluta tempora praesentium quam in eos nesciunt corrupti dolorum assumenda pariatur? Nostrum, et. Eius, necessitatibus rerum porro et, sint sunt dicta non cumque libero amet sequi odio. Voluptates similique velit, fugiat reiciendis impedit neque pariatur exercitationem libero optio quaerat, ducimus quibusdam necessitatibus maxime, suscipit a! Vitae, quidem quod eaque commodi ducimus perspiciatis quisquam vero deleniti debitis delectus magnam mollitia voluptatem veritatis ad nisi laudantium esse laboriosam consectetur blanditiis praesentium illo labore autem? Pariatur vitae sed, voluptate illum ullam facilis quae ipsum! Voluptatibus, officiis id pariatur cumque quo qui ratione et veniam amet doloribus magni itaque deleniti! Cumque delectus eos eius sequi alias minima voluptate deserunt tenetur fugit corporis. Explicabo, officia. Provident nobis asperiores vel exercitationem, modi accusamus minima, enim dicta assumenda natus eaque cumque? Repellat dignissimos ullam doloremque officia, dolor ex ipsum quisquam tempora temporibus sint corrupti iste vero culpa rerum eaque inventore accusamus a sed! Natus, nulla incidunt..',
            createdAt: '2023-11-21T10:34:29.719+00:00',
          }),
        ]);
        setTotalPage(5);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, location.pathname, page]);

  return (
    <>
      <TitleWrapper>
        <Typography variant="h6" style={{ lineHeight: '1.2' }}>
          Reviews
        </Typography>
      </TitleWrapper>
      <InfiniteScroll
        dataLength={reviewsArray.length}
        scrollThreshold={0.9}
        next={() => setPage(page + 1)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        height={800}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <ReviewsListStyled>
          {reviewsArray.map((review, index) => (
            // <li style={style} key={index}>
            //   li - #{index}
            // </li>
            // <ReviewsItem key={review.id} review={review} />
            <ReviewsItem key={index} review={review} />
          ))}
        </ReviewsListStyled>
      </InfiniteScroll>
    </>
  );
};

ReviewsList.propTypes = ReviewsListProps;
