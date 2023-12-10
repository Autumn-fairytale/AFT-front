/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

import { Box, Card, CardContent, Typography } from '@mui/material';

import { AppButton } from '@/shared';

export const DishOrderCardReview = ({ dishId }) => {
  const navigate = useNavigate();

  const handleReviewClick = () => {
    navigate(`/dishes/${dishId}/reviews`);
  };

  return (
    <>
      <Card sx={{ m: 2 }}>
        <CardContent>
          <Typography variant="body2">
            Delicious and perfectly spiced! A truly delightful meal.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            - John Doe
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
