import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ReviewsList } from '@/components/ReviewsList/ReviewsList';
import { Main } from '@/shared/Main/Main';
import { getReviewsByChefId } from '../../../api/getReviewsByChefId';

const ChefInfoPage = () => {
  const { chefId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviewsData = await getReviewsByChefId(chefId);
        setReviews(reviewsData);
        console.log('reviews:', reviewsData);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Main>
      Chef Info Page: {chefId}
      <div
        style={{ width: '100%', height: '800px', border: '1px solid red' }}
      ></div>
      {reviews && <ReviewsList id={chefId} />}
    </Main>
  );
};

export default ChefInfoPage;
