import { useCallback, useState } from 'react';

import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import { AppButton } from '@/shared';
import { AppTextArea } from '@/shared/AppTextArea/AppTextArea';
import { addReview } from '../../api/addReview';
import { editReview } from '../../api/editReviewById';
import { ReviewFormProps } from './ReviewForm.props';
import { ButtonWrapper, Form } from './ReviewForm.styled';

export const ReviewForm = ({ existingReview, dishId }) => {
  // Test with userId
  // const userId = '6561f42ef5c506ec5f36dbba';

  const [rating, setRating] = useState(
    existingReview ? existingReview.rating : 0
  );
  const [review, setReview] = useState(
    existingReview ? existingReview.review : ''
  );

  const handleTextareaChange = useCallback((e) => {
    setReview(e.target.value);
  }, []);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log('Hello');

    existingReview
      ? editReview({ rating, review, dishId, reviewId: existingReview.id })
      : addReview({ rating, review, dishId });
  };

  return (
    <Form onSubmit={handleFeedbackSubmit} style={{ width: '600px' }}>
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
          name="review"
        />
      </label>
      <ButtonWrapper>
        <AppButton variant="contained" label="Send" type="submit" />
      </ButtonWrapper>
    </Form>
  );
};

ReviewForm.propTypes = ReviewFormProps;
