import { useCallback, useState } from 'react';

import { Stack } from '@mui/material';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import { AppTextArea } from '@/shared/AppTextArea/AppTextArea';

export const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleTextareaChange = useCallback((e) => {
    setReview(e.target.value);
  }, []);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFeedbackSubmit} style={{ width: '600px' }}>
      <Stack spacing={3}>
        <label>
          <Typography variant="h5" component="p" gutterBottom>
            Rating
          </Typography>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            sx={{ maxWidth: '205px', fontSize: '40px' }}
          />
        </label>

        <label>
          <Typography variant="h5" component="p" gutterBottom>
            Review
          </Typography>
          <AppTextArea
            minRows={5}
            maxRows={5}
            placeholder="Leave your feedback"
            value={review}
            onChange={handleTextareaChange}
            maxLength={400}
          />
        </label>
        <button type="submit">Submit</button>
      </Stack>
    </form>
  );
};
