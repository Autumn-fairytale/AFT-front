import { Box, Button, Card, CardContent, Typography } from '@mui/material';

export const DishOrderCardReview = () => {
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
        <Button variant="contained" size="small">
          Leave a Review
        </Button>
      </Box>
    </>
  );
};
