import ReviewsItem from '../ReviewsItem/ReviewsItem';

// Mok reviews array

const reviews = [
  {
    id: '6554771a797f3a70dd642a8d',
    owner: '654fe4de18f1f5f14f2e1cc1',
    dish: '6555336759cc4def8b9ea8e7',
    rating: 5,
    review: 'Very tasty! Will definitely repeat.',
  },
  {
    id: '6554771a797f3a70dd642a8e',
    owner: '654fe4de18f1f5f14f2e1cc2',
    dish: '6555336759cc4def8b9ea8e8',
    rating: 4,
    review: 'Large portion, but a bit too salty.',
  },
  {
    id: '6554771a797f3a70dd642a8f',
    owner: '654fe4de18f1f5f14f2e1cc3',
    dish: '6555336759cc4def8b9ea8e9',
    rating: 3,
    review: 'Okay, but nothing special.',
  },
  {
    id: '6554771a797f3a70dd642a90',
    owner: '654fe4de18f1f5f14f2e1cc4',
    dish: '6555336759cc4def8b9ea8ea',
    rating: 2,
    review: 'Not impressive.',
  },
  {
    id: '6554771a797f3a70dd642a91',
    owner: '654fe4de18f1f5f14f2e1cc5',
    dish: '6555336759cc4def8b9ea8eb',
    rating: 5,
    review: 'Awesome!',
  },
  {
    id: '6554771a797f3a70dd642a92',
    owner: '654fe4de18f1f5f14f2e1cc6',
    dish: '6555336759cc4def8b9ea8ec',
    rating: 4,
    review: 'A bit spicy, but delicious.',
  },
  {
    id: '6554771a797f3a70dd642a93',
    owner: '654fe4de18f1f5f14f2e1cc7',
    dish: '6555336759cc4def8b9ea8ed',
    rating: 3,
    review: 'Not bad, but not outstanding.',
  },
  {
    id: '6554771a797f3a70dd642a94',
    owner: '654fe4de18f1f5f14f2e1cc8',
    dish: '6555336759cc4def8b9ea8ee',
    rating: 2,
    review: 'Average.',
  },
  {
    id: '6554771a797f3a70dd642a95',
    owner: '654fe4de18f1f5f14f2e1cc9',
    dish: '6555336759cc4def8b9ea8ef',
    rating: 1,
    review: 'Poor.',
  },
  {
    id: '6554771a797f3a70dd642a96',
    owner: '654fe4de18f1f5f14f2e1cca',
    dish: '6555336759cc4def8b9ea8f0',
    rating: 4,
    review: 'Very satisfied, portions are generous.',
  },
];

export const ReviewsList = () => {
  return (
    <ul>
      {reviews.map((review) => (
        <ReviewsItem key={review.id} review={review} />
      ))}
    </ul>
  );
};
