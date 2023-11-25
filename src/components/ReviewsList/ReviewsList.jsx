import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import ReviewsItem from '../ReviewsItem/ReviewsItem';
import { ReviewsListStyled, TitleWrapper } from './ReviewsList.styled';

// Mok reviews array

const reviews = [
  {
    id: '6554771a797f3a70dd642a96',
    owner: {
      id: '654fe4de18f1f5f14f2e1cc2',
      firstName: 'Jane',
      lastName: 'Doe',
      avatar: 'url_to_avatar_2',
    },
    dish: '6555336759cc4def8b9ea8f0',
    rating: 4,
    review: 'Very satisfied, portions are generous.',
    createdAt: '2023-11-21T10:34:29.719+00:00',
  },
  {
    id: '6554771a797f3a70dd642a97',
    owner: {
      id: '654fe4de18f1f5f14f2e1cc3',
      firstName: 'John',
      lastName: 'Smith',
      avatar: 'url_to_avatar_3',
    },
    dish: '6555336759cc4def8b9ea8f1',
    rating: 5,
    review: 'Excellent service and delicious food.',
    createdAt: '2023-11-21T10:34:29.719+00:00',
  },
  {
    id: '6554771a797f3a70dd642a98',
    owner: {
      id: '654fe4de18f1f5f14f2e1cc4',
      firstName: 'Alice',
      lastName: 'Johnson',
      avatar: 'url_to_avatar_4',
    },
    dish: '6555336759cc4def8b9ea8f2',
    rating: 3,
    review: 'Good experience, but the wait was a bit long.',
    createdAt: '2023-11-21T10:34:29.719+00:00',
  },
  {
    id: '6554771a797f3a70dd642a99',
    owner: {
      id: '654fe4de18f1f5f14f2e1cc5',
      firstName: 'Bob',
      lastName: 'Miller',
      avatar: 'url_to_avatar_5',
    },
    dish: '6555336759cc4def8b9ea8f3',
    rating: 4,
    review: 'Tasty food, reasonable prices.',
    createdAt: '2023-11-21T10:34:29.719+00:00',
  },
  {
    id: '6554771a797f3a70dd642a9a',
    owner: {
      id: '654fe4de18f1f5f14f2e1cc6',
      firstName: 'Eva',
      lastName: 'Brown',
      avatar: 'url_to_avatar_6',
    },
    dish: '6555336759cc4def8b9ea8f4',
    rating: 5,
    review: 'Outstanding service and atmosphere.',
    createdAt: '2023-11-21T10:34:29.719+00:00',
  },
  {
    id: '6554771a797f3a70dd642a9b',
    owner: {
      id: '654fe4de18f1f5f14f2e1cc7',
      firstName: 'Charlie',
      lastName: 'Williams',
      avatar: 'url_to_avatar_7',
    },
    dish: '6555336759cc4def8b9ea8f5',
    rating: 3,
    review: 'Decent experience, could be better.',
    createdAt: '2023-11-21T10:34:29.719+00:00',
  },
  {
    id: '6554771a797f3a70dd642a9c',
    owner: {
      id: '654fe4de18f1f5f14f2e1cc8',
      firstName: 'Grace',
      lastName: 'Jones',
      avatar: 'url_to_avatar_8',
    },
    dish: '6555336759cc4def8b9ea8f6',
    rating: 4,
    review: 'Nice place, friendly staff.',
    createdAt: '2023-11-21T10:34:29.719+00:00',
  },
  {
    id: '6554771a797f3a70dd642a9d',
    owner: {
      id: '654fe4de18f1f5f14f2e1cc9',
      firstName: 'David',
      lastName: 'Taylor',
      avatar: 'url_to_avatar_9',
    },
    dish: '6555336759cc4def8b9ea8f7',
    rating: 5,
    review: 'Absolutely loved it, will come back!',
    createdAt: '2023-11-21T10:34:29.719+00:00',
  },
  {
    id: '6554771a797f3a70dd642a9e',
    owner: {
      id: '654fe4de18f1f5f14f2e1cca',
      firstName: 'Sophia',
      lastName: 'Clark',
      avatar: 'url_to_avatar_10',
    },
    dish: '6555336759cc4def8b9ea8f8',
    rating: 3,
    review: 'Average experience, nothing extraordinary.',
    createdAt: '2023-11-21T10:34:29.719+00:00',
  },
  {
    id: '6554771a797f3a70dd642a9f',
    owner: {
      id: '654fe4de18f1f5f14f2e1ccb',
      firstName: 'Michael',
      lastName: 'White',
      avatar: 'url_to_avatar_11',
    },
    dish: '6555336759cc4def8b9ea8f9',
    rating: 4,
    review: 'Solid choice for a casual meal.',
    createdAt: '2023-11-21T10:34:29.719+00:00',
  },
];

export const ReviewsList = () => {
  const location = useLocation();
  console.log('location:', location);

  useEffect(() => {
    const path = location.pathname;

    const id = path.split('/').pop();

    const endpoint = path.includes('/chefs/')
      ? `/api/reviews/by-chef/${id}/`
      : `/api/reviews/by-dish/${id}/`;

    console.log('endpoint:', endpoint);

    // Зробити запит за даними
    // Продумати пагінацію та взаємодію
  }, [location.pathname]);

  return (
    <>
      <TitleWrapper>
        <Typography variant="h6" style={{ lineHeight: '1.2' }}>
          Reviews
        </Typography>
      </TitleWrapper>

      <ReviewsListStyled>
        {reviews.map((review) => (
          <ReviewsItem key={review.id} review={review} />
        ))}
      </ReviewsListStyled>
    </>
  );
};
