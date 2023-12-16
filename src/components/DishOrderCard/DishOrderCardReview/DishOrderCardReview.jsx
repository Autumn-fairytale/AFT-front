import { useNavigate } from 'react-router-dom';

import { Box, Card, CardContent, Typography } from '@mui/material';

import { AppButton } from '@/shared';
import { DishOrderCardReviewProps } from './DishOrderCardReview.props';

export const DishOrderCardReview = ({ dishId, reviewObj }) => {
  const navigate = useNavigate();

  const handleReviewClick = () => {
    navigate(`/dishes/${dishId}/reviews`);
  };

  const fullName =
    reviewObj && reviewObj?.owner.firstName + ' ' + reviewObj?.owner.lastName;

  const reviewPlaceholder =
    ' Delicious and perfectly spiced! A truly delightful meal.';

  const ownerPlaceholder = 'John Doe';

  return (
    <>
      <Card sx={{ m: 2 }}>
        <CardContent>
          <Typography variant="body2">
            {reviewObj?.review ?? reviewPlaceholder}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            - {fullName || ownerPlaceholder}
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
        <AppButton
          onClick={handleReviewClick}
          variant="outlined"
          size="small"
          label=" To Reviews"
        />
      </Box>
    </>
  );
};

DishOrderCardReview.propTypes = DishOrderCardReviewProps;
